interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    categories: string[];
    products: SeedProduct[];
}




export const initialData: SeedData = {
    categories:[
    'Shirts','Pants','Hoodies','Hats'
    ],

    products: [
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16973-principal.webp'], 
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_shirt_halloween",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Chill Crew Neck Sweatshirt",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16974-principal.webp'], 
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_halloween",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Quilted Shirt Jacket",
            gender: 'men'
        },
        
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16975-principal.webp'], 
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight__shirt_halloween",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'men'
        },

        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16976-Principal_302fa269-3b14-43da-af68-58e3a80e24bc.webp'], 
            inStock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "men_shirt_halloween",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Turbine Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16977-2.webp'],
            inStock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_shirt_naruto",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Turbine Short Sleeve Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16979-1_6b678dcc-cbdf-484d-892e-3985ee642ad9.webp'], 
            inStock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            slug: "men_shirt_naruto",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Cybertruck Owl Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16984-principal.webp'], 
            inStock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            slug: "men__shirt_japan",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Solar Roof Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16985-principal.webp'], 
            inStock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_shirt_japan",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Let the Sun Shine Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16986-1_94cce847-2342-4fe4-a40c-87275ee6f162.webp'], 
            inStock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_let_shirt_japan_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Large Wordmark Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16987-1_892c2cdb-19d0-4e26-9e82-bab4ea730319.webp'],
            inStock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "men_let_shirt_japan_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16988-principal_83b5f509-0e0a-4cde-b9b1-ffe8d6776adc.webp'],
            inStock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3dmen_let_shirt_shiva",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s 3D Small Wordmark Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16989-1_2c627b93-d1f4-43ac-a0bf-f17353031af3.webp'], 
            inStock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_3dmen_let_shirt_shiva_2",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Plaid Mode Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16990-1_c4bb5374-433c-4cf9-ae12-87602174068e.webp'],
            inStock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "men_3dmen_let_shirt_shiva_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16991-1.webp'],
            inStock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "men_3dmen_let_shirt_shiva_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17002-p2.webp'],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "men_3dmen_let_shirt_zelda",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17003-principal.webp'],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_3dmen_let_shirt_zelda_2",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17004-principal.webp'], 
            inStock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "men_3dmen_let_shirt_zelda_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17005-principal.webp'],
            inStock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "men_3dmen_let_shirt_zelda_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17006-1.webp'],
            inStock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "men_3dmen_let_shirt_zelda_5",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17007-principal.webp'], 
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_3dmen_let_shirt_shippuden",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Men's Raven Lightweight Hoodie",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['Copiade16978-1.webp'], 
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_3dmen_let_shirt_shippuden_",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Chill Pullover Hoodie",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['Copiade16980-1.webp'],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_3dmen_let_shirt_shippuden_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['Copiade16981-1.webp'], 
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_3dmen_let_shirt_shippuden_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['Copiade16982-1.webp'], 
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "women_shirt_dark_1",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            gender: 'men'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['1_d4be9fb9-35e9-4f98-9be9-61d5090a9cf9.webp'], 
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "women_shirt_dark_2",
            type: 'hoodies',
            tags: ['shirt'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['3_ba3bc414-3f97-460d-a026-2908655746ef.webp'],
            inStock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_3",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['4_23425815-f185-4e12-b31e-5563118c59d4.webp'], 
            inStock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_4",
            type: 'hats',
            tags: ['shirt'],
            title: "Relaxed T Logo Hat",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['4_c970ee34-7135-460f-b094-50c183c517a0.webp'], 
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_5",
            type: 'hats',
            tags: ['shirt'],
            title: "Thermal Cuffed Beanie",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['5_2ab60a5a-c3e4-49b9-959f-4fcfcfb49642.webp'],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "women_shirt_dark_6",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Women's Cropped Puffer Jacket",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['8_6488d1e4-14c0-4e66-b83d-b79347f6192a.webp'],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_shirt_dark_7",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16919-2.webp'], 
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_8",
            type: 'hoodies',
            tags: ['shirt'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16939-M.webp'],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_9",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Long Sleeve Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16940-M.webp'],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "women_shirt_dark_10",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Short Sleeve Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16941-M.webp'], 
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_dark_11",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16942-M.webp'],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_shirt_dark_12",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16943-M.webp'],
            inStock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_halloween_1",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16958-M_a45ef638-583d-429c-ab46-6322e398c6bf.webp'],
            inStock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "women_shirt_halloween_2",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16959-M.webp'],
            inStock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "women_shirt_halloween_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Plaid Mode Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16960-M.webp'],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_halloween_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16961-M.webp'],
            inStock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "women_shirt_halloween_5",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Corp Jacket",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16962-M.webp'],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_shirt_japan_1",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Raven Joggers",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16992-principal.webp'],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_2",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Long Sleeve Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16993-principal.webp'],
            inStock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Scribble T Logo Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16994-principal.webp'],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16995-principal_ad167ed4-3ee9-497f-9fb2-6c16d04ecc39.webp'],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_5",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Racing Stripe Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16997-principal.webp'], 
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_6",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids 3D T Logo Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['16998-principal.webp'], 
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "women_shirt_japan_7",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['17001-1.webp'],
            inStock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "women_shirt_japan_8",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            gender: 'women'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['CREATIVAS-5_55c59eb3-8c23-49a7-a52e-50fc02cc5705.webp'], 
            inStock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "kid_sweater_hero_1",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            gender: 'kid'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['CREATIVAS-7_7e6cb0cc-3ff0-4f68-aac8-de845edd4fa3.webp'],
            inStock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "kid_sweater_hero_2",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            gender: 'kid'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['CREATIVAS-10_ffada832-2767-41aa-b701-3486b425bd5e.webp'],
            inStock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "kid_sweater_hero_3",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cyberquad Bomber Jacket",
            gender: 'kid'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['CREATIVAS-13_64323d1d-765f-46b1-9bf8-7ad3643fd3f1.webp'], 
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kid_sweater_hero_4",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            gender: 'kid'
        },
        {
            description: 'The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            images:['CREATIVAS-16_88b995b1-dea8-4b11-a8b1-475a64b604eb.webp'], 
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kid_sweater_hero_5",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            gender: 'kid'
        },
    ]
}