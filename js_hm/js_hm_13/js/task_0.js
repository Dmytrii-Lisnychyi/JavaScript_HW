"use strict";
if (confirm('Почати тестування?')) {
    const websites = [
        {
            companyName: "WebStar",
            companyOwner: "Іван Коваль",
            companySponsors: [
                {
                    secondName: "Петренко",
                    firstName: "Олег",
                    investment: 50000
                },
                {
                    secondName: "Сидоренко",
                    firstName: "Марія",
                    investment: 130000
                }
            ],
            yearOfRelease: 2008,
            websitePrice: 180000
        },
        {
            companyName: "SitePro",
            companyOwner: "Олена Гринь",
            companySponsors: [
                {
                    secondName: "Кравець",
                    firstName: "Антон",
                    investment: 124000
                }
            ],
            yearOfRelease: 2006,
            websitePrice: 150000
        },
        {
            companyName: "DigitalWay",
            companyOwner: "Сергій Литвин",
            companySponsors: [
                {
                    secondName: "Мельник",
                    firstName: "Ірина",
                    investment: 25000
                },
                {
                    secondName: "Шевченко",
                    firstName: "Василь",
                    investment: 35000
                }
            ],
            yearOfRelease: 2020,
            websitePrice: 88000
        },
        {
            companyName: "ITCraft",
            companyOwner: "Марія Романенко",
            companySponsors: [
                {
                    secondName: "Гончар",
                    firstName: "Олександр",
                    investment: 60000
                }
            ],
            yearOfRelease: 2017,
            websitePrice: 110000
        },
        {
            companyName: "WebVision",
            companyOwner: "Дмитро Савченко",
            companySponsors: [
                {
                    secondName: "Козак",
                    firstName: "Олег",
                    investment: 132000
                }
            ],
            yearOfRelease: 2021,
            websitePrice: 100000
        },
        {
            companyName: "CodeLine",
            companyOwner: "Тетяна Іванова",
            companySponsors: [
                {
                    secondName: "Бондар",
                    firstName: "Світлана",
                    investment: 27000
                },
                {
                    secondName: "Рибак",
                    firstName: "Ігор",
                    investment: 92000
                }
            ],
            yearOfRelease: 2016,
            websitePrice: 150000
        },
        {
            companyName: "SoftGroup",
            companyOwner: "Віктор Коваленко",
            companySponsors: [
                {
                    secondName: "Лисенко",
                    firstName: "Олена",
                    investment: 41000
                }
            ],
            yearOfRelease: 2015,
            websitePrice: 55000
        },
        {
            companyName: "NextWeb",
            companyOwner: "Анна Петрів",
            companySponsors: [
                {
                    secondName: "Семенюк",
                    firstName: "Павло",
                    investment: 37000
                }
            ],
            yearOfRelease: 2005,
            websitePrice: 52000
        },
        {
            companyName: "PixelArt",
            companyOwner: "Олексій Гриценко",
            companySponsors: [
                {
                    secondName: "Данилюк",
                    firstName: "Валерія",
                    investment: 29000
                }
            ],
            yearOfRelease: 2014,
            websitePrice: 35000
        },
        {
            companyName: "WebExpert",
            companyOwner: "Світлана Кравчук",
            companySponsors: [
                {
                    secondName: "Ткаченко",
                    firstName: "Роман",
                    investment: 35000
                },
                {
                    secondName: "Захарченко",
                    firstName: "Олександра",
                    investment: 77000
                }
            ],
            yearOfRelease: 2001,
            websitePrice: 160000
        }
    ];
    //1) загальну вартість усіх сайтів
    const totalSum = websites.reduce((prevSum, website) => { var _a; return prevSum + ((_a = website.websitePrice) !== null && _a !== void 0 ? _a : 0); }, 0);
    document.write(`totalSum: ${totalSum}<br>`);
    //2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    const res1 = websites.filter(website => { var _a; return (_a = (website.yearOfRelease > 2000 && website.yearOfRelease < 2009)) !== null && _a !== void 0 ? _a : 0; }).length;
    document.write(`result >2000 < 2009: ${res1}<br>`);
    //3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    const res2 = websites.filter(website => website.companySponsors.reduce((prevSum, value) => prevSum + value.investment, 0) > 100000).length;
    document.write(`result > 100000: ${res2}<br>`);
    // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    const sponsorList = websites.flatMap((website) => website.companySponsors);
    console.log(sponsorList);
    //5) знайти рік, коли прибуток був найбільшим
    let maxProfit = 0;
    let maxProfitYear = 0;
    for (const website of websites) {
        if (website.websitePrice > maxProfit) {
            maxProfit = website.websitePrice;
            maxProfitYear = website.yearOfRelease;
        }
    }
    console.log(maxProfit, maxProfitYear);
    // 6) упорядкувати список за спаданням прибутку
    const websitesSortProfit = websites.sort((a, b) => b.websitePrice - a.websitePrice);
    console.log(websitesSortProfit);
    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
    let priceUpTo100000 = [];
    let priceMoreThan100000 = [];
    for (const website of websites) {
        if (website.websitePrice > 100000) {
            priceMoreThan100000.push(Object.assign({}, website));
        }
        else {
            priceUpTo100000.push(Object.assign({}, website));
        }
    }
    console.log("До 100000:", priceUpTo100000);
    console.log("Більше 100000:", priceMoreThan100000);
}
