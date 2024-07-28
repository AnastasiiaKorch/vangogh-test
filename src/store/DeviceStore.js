import roundLight from "../static/roundLight.png"
import darkLongLight from "../static/darkLongLight.png"
import whiteLongLight from "../static/whiteLongLight.png"

export default class DeviceStore {
    constructor() {
        this._types=[
            {
                id:1,
                name:"Лампы"
            }
        ]

        this._devices =[
            {
                id:1,
                name:"Встраиваемый светильник Markt",
                discount: "3 490 P",
                price: "5 060 ₽",
                img: roundLight
            },
            {
                id:2,
                name:"Линейный светильник ARG",

                price: "6 700 ₽",
                img:darkLongLight
            },
            {
                id:3,
                name:"Светодиодный светильник",
                discount: "5 060 ₽",
                price: "6 060 ₽",
                img:whiteLongLight
            },
            {
                id:4,
                name:"Встраиваемый светильник Markt",
                price: "3 490 ₽",
                img:roundLight
            },
            {
                id:5,
                name:"Линейный светильник ARG",
                discount: "6 700 ₽",
                price: "6 060 ₽",
                img:darkLongLight
            },
            {
                id:6,
                name:"Светодиодный светильник",
                price: "5 060 ₽",

                img:whiteLongLight
            },
            {
                id:7,
                name:"Встраиваемый светильник Markt",
                discount: "3 490 ₽",
                price: "5 060 ₽",
                img:roundLight
            },
            {
                id:8,
                name:"Линейный светильник ARG",
                price: "6 700 ₽",
                img:darkLongLight
            }
        ]
    }
}