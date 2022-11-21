var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    { 
        "baslik" : 'Anasayfa',
        "sayfaBaslik" : {
            "siteAd" : "MekanBul",
            "slogan" : "Civardaki Mekanları Keşfet!"
        },
        "mekanlar" : [
            {
                "ad" : "Starbucks",
                "puan" : "3",
                "adres" : "Centrum Garden AVM",
                "imkanlar" : ["Dünya Kahveleri", "Kekler", "Pastalar"],
                "mesafe" : "10km"
            },
            {
                "ad" : "Barida Kafe",
                "puan" : "4",
                "adres" : "Sdü Batı Kampüsü",
                "imkanlar" : ["Kahve", "Çay", "Kek"],
                "mesafe" : "8km"
            }
        ]
    });
};

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', 
    { 
        "baslik" : 'Mekan Bilgisi',
        "mekanBaslik" : "Starbucks",
        "mekanDetay" : {
            "ad" : "Starbucks",
            "puan" : "3",
            "adres" : "Centrum Garden AVM",
            "saatler" : [
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis":"9:00",
                    "kapanis":"23:00",
                    "kapali": false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis":"10:00",
                    "kapanis":"22:00",
                    "kapali": false
                }
            ],
            "imkanlar" : ["Dünya Kahveleri", "Kekler", "Pastalar"],
            "koordinatlar" : {
                "enlem" : "37.7",
                "boylam" : "30.5"
            },
            "yorumlar" : [
                {
                    "yorumYapan" : "Atakan Turgut",
                    "yorumMetni" : "Harika!!!",
                    "tarih" : "20 Ekim 2022",
                    "puan" : "4"
                },
                {
                    "yorumYapan" : "Asım Sinan Yüksel",
                    "yorumMetni" : "Kahveler iyi.",
                    "tarih" : "14 Ekim 2022",
                    "puan" : "3"
                },
            ]
        }
    });
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
