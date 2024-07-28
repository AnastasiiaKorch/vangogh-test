import React,{useState} from 'react';
import {Col, Card, Image} from "react-bootstrap"

const DeviceItem = ({device}) => {
    const [showButton, setShowButton] = useState(false);


    return (
        <Col md={3} lg={3} sm={6} xs={6}
             onMouseEnter={() => setShowButton(true)}
             onMouseLeave={() => setShowButton(false)}
        >
            <Card style={{ width: "100%", border: "none" }}>
                <div style={{ position: "relative", alignItems:"end" }}>
                    <Image
                        src={device.img}
                      // width={320}
                        width="95%"
                        //height={447}
                        style={{ borderRadius: "15px", marginTop: "35px" }}
                    />
                    {device.discount && (
                        <button
                            style={{
                                position: "absolute",
                                top: "45px",
                                left: "10px",
                                width: "126px",
                                height: "38px",
                                borderRadius: "25px",
                                backgroundColor: "#231815",
                                color: "white",
                                zIndex: 1,
                                fontWeight:600,
                                border:"none"
                            }}
                        >
                            Акция
                        </button>
                    )}
                    {showButton && device.discount && (
                        <button
                            style={{
                                position: "absolute",
                                bottom: "20px", // Располагаем кнопку внизу
                                left: "30px", // Отступ слева
                                width: "80%",
                                height: "48px",
                                borderRadius: "25px",
                                backgroundColor: "#E45302",
                                color: "white",
                                zIndex: 1,
                                border:"none",
                                fontSize:"16px",
                                fontWeight:600,
                            }}
                        >
                            Подробнее
                        </button>

                    )}
                </div>
                <div
                    style={{ fontWeight: "700", fontSize: "18px", lineHeight: "25px", marginTop: "25px" }}
                >
                    {device.name}
                </div>
                {device.discount ? (
                    <div style={{ display: "flex", alignItems: "baseline" }}>
                        <div
                            style={{ fontSize: "22px", fontWeight: "700", color: "#E45302", marginRight: "20px" }}
                        >
                            {device.discount}
                        </div>
                        <div
                            style={{ marginTop: "25px", fontSize: "22px", fontWeight: "700", color: "#808080",textDecoration:"line-through" }}
                        >
                            {device.price}

                        </div>
                    </div>
                ) : (
                    <div style={{ marginTop: "25px", fontSize: "22px", fontWeight: "700" }}>
                        {device.price}
                    </div>
                )}

            </Card>
        </Col>
    );
};

export default DeviceItem;