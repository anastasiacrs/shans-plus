// {
//     "items":[{
//     "title":"Какая-то акция",
//     "subtitle":" Ползаголовок"
//     "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     "bottomText":"Действует до 01.01.2020",
//     "imageUrl":"assets/images/promo/1.png"
// }]
// }

export class PromoConfigItem{
    title:string;
    subtitle?:string;
    description?:string;
    bottomText?:string;
    imageUrl?:string;
}
export class PromoConfig{
    items:Array<PromoConfigItem>;
}