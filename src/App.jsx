/* eslint-disable react/no-unescaped-entities */
import "./App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

import { useState } from "react";
import InputMask from "react-input-mask";
import Fade from "react-reveal/Fade";
import "react-image-gallery/styles/css/image-gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({ number: "" });
  const [err, setErr] = useState({});

  const toast = useToast();

  const product = [
    {
      name: "JANOME 1522BL",
      price: "2 875 000",
      id: "",
      hot: true,
      action: true,
      actionNumber: 5,
      img: "/img/1522%20b1.jpg",
    },
    {
      name: "JANOME 1815",
      price: "1 937 000",
      id: "",
      hot: true,
      action: true,
      actionNumber: 5,
      img: "/img/1815.jpg",
    },
    {
      name: "JANOME 2041",
      price: "2 250 000",
      id: "",
      hot: false,
      action: false,
      actionNumber: 5,
      img: "/img/2141.jpg",
    },
    {
      name: "JANOME VS 50",
      price: "1 812 000",
      id: "",
      hot: false,
      action: false,
      actionNumber: 5,
      img: "/img/VS%2050.jpeg",
    },
    {
      name: "JANOME VS 56S",
      price: "2 250 000",
      id: "",
      hot: false,
      action: false,
      actionNumber: 5,
      img: "/img/VS%2056s%205.jpeg",
    },
    {
      name: "JANOME VS52",
      price: "1 937 000",
      id: "",
      hot: false,
      action: false,
      actionNumber: 5,
      img: "/img/VS%2052.jpg",
    },
    {
      name: "JANOME XV 5",
      price: "1 812 000",
      id: "",
      hot: false,
      action: false,
      actionNumber: 5,
      img: "/img/XV5%20b.jpg",
    },
  ];
  const adv = [
    {
      name: "lorem",
      id: 1,
      icon: "/img/gift.png",
      title: "Ajoyib sovg'alar",
      desc: "Janome xarid qilish orqali ajoyib sovg'alarga ega bo'ling",
    },
    {
      name: "lorem",
      id: 2,
      icon: "/img/guaranty.png",
      title: "Kafolat",
      desc: " lorem inpsum nimaladir nimaladir",
    },
    {
      name: "lorem",
      id: 3,
      icon: "/img/unboxing.png",
      title: "Sifat ustunligi",
      desc: " lorem inpsum nimaladir nimaladir asdasd",
    },
    {
      name: "lorem",
      id: 4,
      icon: "/img/truck.png",
      title: "Yetkazib berish",
      desc: "O'zbekiston bo'ylab yetkazib berish.",
    },
  ];
  const handleModal = (item) => {
    setData(item);
    setModal(true);
  };
  const onClose = () => {
    setModal(false);
  };

  const Send = () => {
    let t = true,
      error = {};
    if (!obj?.name) {
      error = { ...error, name: true };
      t = false;
    }
    if (!obj?.area) {
      error = { ...error, area: true };
      t = false;
    }
    if (
      !(
        obj?.number
          .replace(/-/g, "")
          .replace(/\(/g, "")
          .replace(/\)/g, "")
          .replace(/\+/g, "")
          .replace(/\s/g, "")
          .replace(/_/g, "")?.length >= 12
      )
    ) {
      error = { ...error, number: true };
      t = false;
    }
    if (t) {
      axios
        .post(
          encodeURI(
            `https://api.telegram.org/bot2074530009:AAEtVY4ewFs5p87HW5MMX3wb-d6xdUkyKZU/sendMessage?chat_id=${-1001789196770}&text=<b>Mahsulot nomi: </b><code>${
              data?.name
            }</code> \n<b>Narxi: </b><code>${
              data?.price
            }</code> \n<b>Ismi: </b><code>${
              obj?.name
            }</code> \n<b>Telefon raqami: </b><code>${
              obj?.number
            }</code> \n<b>Hudud: </b><code>${
              obj?.area
            }</code>\n&parse_mode=html`
          )
        )
        // .then((response) => response.json())
        .then((res) => {
          if (res?.status === 200) {
            setModal(false);
            toast({
              position: "top-right",
              title: "So'rovingiz yuborildi",
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setObj({ number: "" });
          }
        });
    } else {
      setErr(error);
    }
  };
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };

  return (
    <>
      <ChakraProvider>
        <div className="navbar py-3">
          <div className="container">
            <img
              style={{ width: 145, margin: "0" }}
              src="/img/JANOME%20Logo.png"
              alt=""
            />
            {/* <button className="btn btn-outline-info">
              <Link to={"tel:+998910032202"}>+998 91 003 22 02</Link>
            </button> */}
            <button className="call-btn">
              <p>+998 91 003 22 02</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </button>
          </div>{" "}
        </div>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: "80%" }} className={""}>
            <img src={"/img/slide1.jpg"} />
          </SwiperSlide>

          <SwiperSlide style={{ width: "80%" }}>
            <img src={"/img/slide2.jpg"} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "80%" }}>
            <img src={"/img/slide2.jpg"} />
          </SwiperSlide>
        </Swiper>
        <div className="container mt-3">
          <Fade top>
            <h2 className="seller-title">Mahsulotlarimiz</h2>
          </Fade>

          <div className="cards">
            {product.map((item, i) => {
              return (
                <Fade key={i} bottom delay={i * 50}>
                  <div className="card_box">
                    <span></span>

                    <div className="card-img">
                      <img src={item?.img} alt="" />
                    </div>
                    <div className="text">
                      <div className="title">{item?.name}</div>
                      <div className="price">{item?.price} so'm</div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <button
                        className="btn btn-success w-100"
                        style={{
                          cursor: "pointer",
                          borderRadius: "20px",
                          background: "black",
                        }}
                        type="button"
                        onClick={() => {
                          handleModal(item);
                        }}
                      >
                        Sotib olish
                      </button>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>

        <div className="mb-4 justify-content-between h-100 shop">
          <h2>Xafta mahsuloti</h2>
          <div className="shop-items position-relative">
            <div className="container shop-item">
              <div className="shop_img">
                <img src="/img/1522%20b1.jpg" alt="" />
              </div>
              <div className="shop-item_texts text-left">
                <button className="button-deal">Xafta mahsuloti</button>
                <div className="price">
                  <span className="number">99.99 so'm</span>
                  <div
                    className="number text-red text-decoration-line-through"
                    style={{ color: "red" }}
                  >
                    99.99 so'm
                  </div>
                </div>
                <button
                  className="shop_now-button"
                  onClick={() => {
                    handleModal(product[0]);
                  }}
                >
                  <span>Hoziroq Xarid qiling</span>
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eget hendrerit odio,
                </p>
              </div>
            </div>
            <div className="white"></div>
          </div>
        </div>
        <div className="container">
          <h2 className="my-4 seller-title">Yetkazib berish</h2>
          <div className="delivery">
            <div className="d-flex justify-content-center">
              <img
                src="/img/delir1.jpg"
                alt=""
                style={{ maxHeight: "550px", borderRadius: "16px" }}
              />
            </div>
            <div className="text-delivery">
              <p className="my-4 text-center">
                <b>EMU express</b> orqali Toshkent shahar ichida 24 soatda,
                O'zbekiston bo'ylab 48 soat ichida uyingizga yetkazib beriladi.
              </p>
            </div>
          </div>
          <div className="advantages">
            <h2>Bizning afzalliklar</h2>
            <div className="advantages-items">
              {adv.map((item, i) => {
                return (
                  <div className="advantages-item" key={i}>
                    <div className="advantages-item_img">
                      {/*    <img src={item?.icon} alt={item?.name}/>*/}
                      <Image
                        borderRadius="full"
                        boxSize="100px"
                        src={item?.icon}
                        alt={item?.name}
                      />
                    </div>

                    <div className="advantages-item_title">{item?.title}</div>
                    <div className="advantages-item_desc">{item?.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="container">
            <h2 style={{ color: "black" }}>Ko'p beriladigan savollar</h2>
            <Accordion allowToggle>
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Buyurtma qanday amalga oshiriladi?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>
                      O'zingizni qiziqtirgan mahsulotni tanlang va sotib olish
                      tugmasini bosish orqali kontakt ma'lumotlaringizni
                      qoldiring.
                    </li>
                    <li>
                      Tez fursatda operatorlarimiz siz bilan bog'lanishadi.
                    </li>
                  </AccordionPanel>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        To'lov qanday amalga oshiriladi?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>
                      Click, PAYME va boshqa online to'lov tizimlari orqali
                    </li>
                    <li>
                      Buyurtmani qabul qilgandan so'ng to'lovni amalga oshirish
                    </li>
                    <li>Naqd pul orqali joyida to'lov</li>
                  </AccordionPanel>
                </div>
              </AccordionItem>{" "}
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Bo'lib to'lashga olish mumkunmi?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>Uzum nasiya orqali</li>
                    <li>Zoodpay orqali</li>
                    <li>Mahalla orqali 14 foizlik kredit</li>
                  </AccordionPanel>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center">To'lovlar</h2>
          <div className="payments">
            <div className="payments-items">
              <div className="p-4">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100px" }}
                >
                  <img src="/img/uzum.png" alt="" />
                </div>
                <p className="text-center mt-2">
                  Lorem ipsum dolor sit amet cons Lorem, ipsum dolor. ectet
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
            <div className="payments-items">
              <div className="p-4">
                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{ height: "100px" }}
                >
                  <img src="/img/zoopay.png" alt="" />
                </div>
                <p className="text-center mt-2">
                  Lorem ipsum dolor sit amet cons Lorem, ipsum dolor. ectet
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
            <div className="payments-items">
              <div className="p-4">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100px" }}
                >
                  <img src="/img/uzum.png" alt="" />
                </div>
                <p className="text-center mt-2">
                  Lorem ipsum dolor sit amet cons Lorem, ipsum dolor. ectet
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <MDBFooter className="bg-light text-center text-white">
          <MDBContainer className="p-4 pb-0 text-center">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="d-flex  flex-wrap justify-content-center mb-2">
                <Link to="/" className=" m-1 socialContainer containerOne">
                  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                    {" "}
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
                  </svg>
                </Link>

                <Link to="/" className=" m-1 socialContainer containerTwo">
                  <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
                    {" "}
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>{" "}
                  </svg>{" "}
                </Link>

                <Link to="/" className=" m-1 socialContainer containerThree">
                  <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </Link>

                <Link to="/" className=" m-1 socialContainer containerFour">
                  <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                    {" "}
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
                  </svg>
                </Link>
              </div>
              <div>
                <div>
                  <Link to="tel:+998936645664" style={{ color: "black" }}>
                    +99893 664 56 64
                  </Link>
                </div>
                <div>
                  <Link to="tel:+998936645664" style={{ color: "black" }}>
                    +99893 664 56 64
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ color: "black", textAlign: "start" }}
              className="my-2"
            >
              Manzil: Toshkent shahri, Yakkasaroy tumani, Qushbegi koʻchasi 26
            </div>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
          </div>
        </MDBFooter>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={modal} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalCloseButton /> */}

            <ModalBody>
              <div className="text-center d-block  d-md-flex ">
                <div
                  className="d-flex justify-content-center w-md-50 w-100 "
                  style={{ marginRight: "20px" }}
                >
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      style={{ height: "300px" }}
                      className="p-3"
                    />
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, expedita.
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3  w-md-50 w-100 mt-md-0 pt-4"
                  style={{
                    background: "#e7e7e7",
                    padding: "10px",
                    borderLeft: "2px solid #919191",
                  }}
                >
                  <div>
                    <div className="mb-4" style={{ textAlign: "left" }}>
                      <label htmlFor="">ism kiriting</label>
                      <Input
                        placeholder="Ismi:"
                        onChange={handleChange}
                        name="name"
                        value={obj?.name}
                        style={{ background: "white" }}
                      />
                      {err?.name === true ? (
                        <span style={{ color: "red" }}>
                          {"ismingizni kiriting"}
                        </span>
                      ) : null}
                    </div>
                    <div className="mb-4" style={{ textAlign: "left" }}>
                      <label htmlFor="">Telefon raqam kiriting</label>
                      <InputMask
                        className="form-control"
                        placeholder="Raqam kiriting:"
                        formatChars={{ b: "[0-9]" }}
                        mask="+998 (bb) bbb-bb-bb"
                        maskChar="_"
                        name="number"
                        value={obj?.number}
                        onChange={handleChange}
                      />
                      {err?.number === true ? (
                        <span style={{ color: "red" }}>{"raqam kiriting"}</span>
                      ) : null}
                    </div>
                    <div className="mb-4" style={{ textAlign: "left" }}>
                      <label htmlFor="">Hudud kiriting</label>
                      <Input
                        placeholder="Hudud"
                        onChange={handleChange}
                        name="area"
                        style={{ background: "white" }}
                        value={obj?.area}
                      />
                      {err?.area === true ? (
                        <span style={{ color: "red" }}>
                          {"huduni kiriting"}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div>{data?.name}</div>
                  <div>{data?.price} so'm</div>

                  <button className="send" onClick={Send}>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Sotib olish</span>
                  </button>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
}

export default App;
