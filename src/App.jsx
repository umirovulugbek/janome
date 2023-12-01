/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  MDBFooter,
  MDBContainer,
  // MDBCol,
  // MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import InputMask from "react-input-mask";
import Fade from "react-reveal/Fade";
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
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
      icon: "/img/star.png",
      title: "Sifat ustunligi",
      desc: " lorem inpsum nimaladir nimaladir asdasd",
    },
    {
      name: "lorem",
      id: 4,
      icon: "/img/delivery-truck.png",
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
        <div className="container">
          <div className="navbar my-3">
            <img
              style={{ width: 160, height: 42 }}
              src="/img/JANOME%20Logo.png"
              alt=""
            />
            <button className="btn btn-outline-info">submit</button>
          </div>

          <Swiper
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            loop={true}
            speed={1300}
            autoplay={{
              delay: 4500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/img/slide1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/img/slide2.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>

          <Fade top>
            <h2 className="seller-title">Mahsulotlarimiz</h2>
          </Fade>

          <div className="cards">
            {product.map((item, i) => {
              return (
                <Fade key={i} bottom delay={i * 50}>
                  <div className="card">
                    <div className="card-img">
                      <img src={item?.img} alt="" />
                    </div>
                    <div className="text">
                      <div className="title">{item?.name}</div>
                      <div className="price">{item?.price} so'm</div>
                    </div>
                    <button
                      className="btn btn-success"
                      style={{ cursor: "pointer" }}
                      type="button"
                      onClick={() => {
                        handleModal(item);
                      }}
                    >
                      Sotib olish
                    </button>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
        <div className="mb-4 justify-content-between h-100 shop">
          <div className="shop-items position-relative">
            <div className="container shop-item">
              <div className="shop_img">
                <img src="/img/1522%20b1.jpg" alt="" />
              </div>
              <div className="shop-item_texts text-left">
                <button className="button-deal">Xafta mahsuloti</button>
                <div className="price">
                  from
                  <span className="number">$99.99</span>
                </div>
                <button className="shop_now-button">
                  Hoziroq Xarid qiling
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eget hendrerit odio, non ultrices lorem. Donec vel
                  vestibulum eros. Curabitur fringilla arcu varius.
                </p>
              </div>
            </div>
            <div className="white"></div>
          </div>
        </div>
        <div className="container">
          <div className="delivery">
            <img src="/img/delir.jpg" alt="" />
            <div className="text-delivery">
              <h2 className="my-4">Yetkazib berish</h2>
              <p className="my-4">
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
          <h1>To'lovlar</h1>
          <div className="payments">
            <div className="payments-items">
              <img src="/img/20041.jpg" alt="" />
            </div>
            <div className="payments-items">
              <img src="/img/20041.jpg" alt="" />
            </div>
            <div className="payments-items">
              <img src="/img/20041.jpg" alt="" />
            </div>
          </div>
        </div>
        <MDBFooter className="bg-light text-center text-white">
          <MDBContainer className="p-4 pb-0">
            <section className="mb-4">
              <Link
                className="m-1"
                style={{
                  backgroundColor: "#3b5998",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to="/"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </Link>

              <Link
                className="m-1"
                style={{
                  backgroundColor: "#55acee",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to=""
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </Link>

              <Link
                className="m-1"
                style={{
                  backgroundColor: "#dd4b39",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to="/"
              >
                <MDBIcon fab icon="google" />
              </Link>
              <Link
                className="m-1"
                style={{
                  backgroundColor: "#ac2bac",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to="#!"
              >
                <MDBIcon fab icon="instagram" />
              </Link>

              <Link
                className="m-1"
                style={{
                  backgroundColor: "#0082ca",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to="/"
              >
                <MDBIcon fab icon="linkedin-in" />
              </Link>

              <Link
                className="m-1"
                style={{
                  backgroundColor: "#333333",
                  borderRadius: "8px",
                  padding: "15px",
                }}
                to="/"
              >
                <MDBIcon fab icon="github" />
              </Link>
            </section>
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
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
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
        <Modal isOpen={modal} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader></ModalHeader>
            <ModalBody>
              <div className="text-center">
                <div className="d-flex justify-content-center">
                  <img src={data.img} alt="" style={{ height: "300px" }} />
                </div>
                <div>
                  <div className="mb-4" style={{ textAlign: "left" }}>
                    <Input
                      placeholder="Ismi:"
                      onChange={handleChange}
                      name="name"
                      value={obj?.name}
                    />
                    {err?.name === true ? (
                      <span style={{ color: "red" }}>
                        {"ismingizni kiriting"}
                      </span>
                    ) : null}
                  </div>
                  <div className="mb-4" style={{ textAlign: "left" }}>
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
                    <Input
                      placeholder="Hudud"
                      onChange={handleChange}
                      name="area"
                      value={obj?.area}
                    />
                    {err?.area === true ? (
                      <span style={{ color: "red" }}>{"huduni kiriting"}</span>
                    ) : null}
                  </div>
                </div>
                <div>{data?.name}</div>
                <div>{data?.price} so'm</div>

                <input type="text" />
                <button className="btn  btn-success" onClick={Send}>
                  Sotib olish
                </button>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
}

export default App;
