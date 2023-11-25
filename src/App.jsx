/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
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
  const toast = useToast();
  const product = [
    {
      name: "JANOME 1522BL",
      price: "2 875 000",
      id: "",
      hot: false,
      action: false,
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
      icon: "/img/1815.jpg",
      title: "lorem lorem",
      desc: " lorem inpsum nimaladir nimaladir",
    },
    {
      name: "lorem",
      id: 2,
      icon: "/img/1815.jpg",
      title: "lorem lorem",
      desc: " lorem inpsum nimaladir nimaladir",
    },
    {
      name: "lorem",
      id: 3,
      icon: "/img/1815.jpg",
      title: "lorem lorem",
      desc: " lorem inpsum nimaladir nimaladir",
    },
    {
      name: "lorem",
      id: 4,
      icon: "/img/1815.jpg",
      title: "lorem lorem",
      desc: " lorem inpsum nimaladir nimaladir",
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
    axios
      .post(
        encodeURI(
          `https://api.telegram.org/bot2074530009:AAEtVY4ewFs5p87HW5MMX3wb-d6xdUkyKZU/sendMessage?chat_id=${-1001789196770}&text=<b>👤Nomi:</b><code>${
            data?.name
          }</code> \n<b>Narxi:</b><code>${data?.price}</code>\n&parse_mode=html`
        )
      )
      // .then((response) => response.json())
      .then((res) => {
        if (res?.status === 200) {
          setModal(false);
          toast({
            title: "So'rovingiz yuborildi",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <>
      <ChakraProvider>
        <div className="container">
          <div className="navbar my-3">
            <img src="/img/Drile.svg" alt="" />
            <button className="btn btn-outline-info">submit</button>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            loop={true}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <img
                  src="/img/vecteezy_interior-design-of-a-modern-room-in-3d-illustration_2074065 1.jpg"
                  alt=""
                />
                <p className="slider-text">Get ready for Our stylist chair</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img
                  src="/img/vecteezy_interior-design-of-a-modern-room-in-3d-illustration_2074065 1.jpg"
                  alt=""
                />
                <p className="slider-text">Get ready for Our stylist chair</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <h2 className="seller-title">Mahsulotlarimiz</h2>
          <div className="cards">
            {product.map((item, i) => {
              return (
                <div key={i} className="card">
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
              <h2 className="my-4" style={{ fontSize: "40px" }}>
                Информация о доставке
              </h2>
              <p style={{ fontSize: "20px" }} className="my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                iure labore ipsa quisquam facilis neque repellendus aliquid
                mollitia molestias possimus, natus molestiae laboriosam tempore.
                Consectetur earum quos repudiandae voluptate nulla?
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
                      <img src={item?.icon} alt={item?.name} />
                    </div>
                    <div className="advantages-item_title">
                      {item?.title} {item?.id}
                    </div>
                    <div className="advantages-item_desc">{item?.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="container">
            <h2 style={{ color: "white" }}>Bazi savollar</h2>
            <Accordion allowToggle>
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Lorem ipsum dolor sit amet.
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Obcaecati debitis deserunt dolores non odio fuga. Placeat,
                      temporibus. Quas, unde odio doloribus est impedit
                      aspernatur omnis aliquid accusantium, saepe voluptatem
                      vel?
                    </li>
                  </AccordionPanel>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Lorem ipsum dolor sit amet.
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Obcaecati debitis deserunt dolores non odio fuga. Placeat,
                      temporibus. Quas, unde odio doloribus est impedit
                      aspernatur omnis aliquid accusantium, saepe voluptatem
                      vel?
                    </li>
                  </AccordionPanel>
                </div>
              </AccordionItem>{" "}
              <AccordionItem>
                <div className="questions-items">
                  <h3>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Lorem ipsum dolor sit amet.
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Obcaecati debitis deserunt dolores non odio fuga. Placeat,
                      temporibus. Quas, unde odio doloribus est impedit
                      aspernatur omnis aliquid accusantium, saepe voluptatem
                      vel?
                    </li>
                  </AccordionPanel>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="mb-5">
                <img src="/img/Drile.svg" alt="" />
              </div>
              <div className="socils">
                <ul className="d-flex">
                  <li className="list-unstyled">
                    <span className="fa-brands fa-telegram fa-xl"></span>
                  </li>
                  <li className="list-unstyled"></li>
                  <li className="list-unstyled"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                <div>{data?.name}</div>
                <div>{data?.price} so'm</div>
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
