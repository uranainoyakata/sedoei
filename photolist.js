// ▼▼▼ 新しい写真リストの書き方です ▼▼▼
// ルール: 写真のファイル名は「1.jpg」「2.jpg」のように連番にしてください。

const imageData = {
    "GUCCIかばん": {
        path: "images/gushikaban", // 写真が入っているフォルダの場所
        count: 51,               // フォルダに入っている写真の「枚数」
        extension: "jpg"        // 写真の拡張子 (jpg, pngなど)
    },
    "科学": {
        path: "images/science/",
        count: 2,
        extension: "png"
    },
    "美術": {
        path: "images/art/",
        count: 2,
        extension: "jpg"
    }
    // 例: 「地理」フォルダに「1.jpg」から「30.jpg」まで30枚入れた場合
    // ,"地理": {
    //     path: "images/geography/",
    //     count: 30,
    //     extension: "jpg"
    // }
};
