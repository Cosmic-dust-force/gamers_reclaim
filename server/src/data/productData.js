const { BASE_URL = "http://localhost:4000" } = process.env;
const IMAGE_URL = `${BASE_URL}/product_images`;

const products = [
  {
    product_name: "Magma Red CUH-ZCT2U DualShock 4 Wireless Controller",
    price_usd: "$40.00",
    inventory_quantity: "3",
    description: "Wireless Controller for PlayStation 4 - Magma Red",
    brand: "Sony",
    category_id: 2,
    image_url: `${IMAGE_URL}/Magma_Red_CUH-ZCT2U_DualShock_4_Wireless_Controller.jpg`,
  },
  {
    product_name: "Jet Black CUH-ZCT2 DualShock 4 Wireless Controller",
    price_usd: "$35.00",
    inventory_quantity: "3",
    description: "Wireless Controller for PlayStation 4 - Jet Black",
    brand: "Sony",
    category_id: 2,
    image_url: `${IMAGE_URL}/Jet_Black_CUH-ZCT2_DualShock _4 _Wireless_Controller.jpg`,
  },
  {
    product_name: "Electric Volt QAU-00021 Wireless Controller",
    price_usd: "$50.00",
    inventory_quantity: "3",
    description: "Xbox Series X|S Wireless Controller Electric Volt",
    brand: "Microsoft",
    category_id: 3,
    image_url: `${IMAGE_URL}/Microsoft_QAU-00021_Xbox_Series_XS_Wireless_Controller_Electric_Volt.jpg`,
  },
  {
    product_name: "Black QAU-00022 Wireless Controller",
    price_usd: "$35.00",
    inventory_quantity: "3",
    description: "Xbox Series Wireless Controller Black",
    brand: "Microsoft",
    category_id: 3,
    image_url: `${IMAGE_URL}/Black_QAU-00022_Wireless_Controller.jpg`,
  },
  {
    product_name: "Princess Peach and Princess Daisy Deluxe Switch Travel Case",
    price_usd: "$35.00",
    inventory_quantity: "3",
    description: "Nintendo 232208 Super Mario Bros Themed Case for the Switch",
    brand: "Nintendo",
    category_id: 4,
    image_url: `${IMAGE_URL}/Nintendo_232208_Super_Mario_Bros._Princess_Peach_and_Princess_Daisy_Deluxe_Travel_Case.jpg`,
  },
  {
    product_name: "Mario Kart Racing Wheel",
    price_usd: "$38.00",
    inventory_quantity: "3",
    description:
      "Refurbished Hori Mario Kart Racing Wheel Pro Mini for Nintendo Switch",
    brand: "Nintendo",
    category_id: 4,
    image_url: `${IMAGE_URL}/Refurbished_Hori_Mario_Kart_Racing_Wheel_Pro_Mini_for_Nintendo_Switch.jpg`,
  },
  {
    product_name: "Playstation Camera",
    price_usd: "$43.00",
    inventory_quantity: "3",
    description:
      "Refurbished PlayStation 3005726 PS5 HD Camera, Dual Lense 1080p",
    brand: "Playstation",
    category_id: 2,
    image_url: `${IMAGE_URL}/Refurbished_PlayStation_3005726_PS5_HD_Camera_Dual_Lense_1080p.jpg`,
  },
  {
    product_name: "Foldable Video Drone",
    price_usd: "$100.00",
    inventory_quantity: "3",
    description:
      "Refurbished Vivitar DRC447 SkyHawk Foldable Video Drone, 1080P HD Live Video RC Quadcopter",
    brand: "Vivitar",
    category_id: 1,
    image_url: `${IMAGE_URL}/Refurbished_Vivitar_DRC447_SkyHawk_Foldable_Video_Drone_1080P_HD_Live_Video_RC_Quadcopter.jpg`,
  },
  {
    product_name: "XBox Game Drive",
    price_usd: "$70.00",
    inventory_quantity: "3",
    description:
      "Refurbished Seagate STKX2000403 Game Drive for Xbox 2TB External USB 3.2 Gen 1 Hard Drive, Grey",
    brand: "Seagate",
    category_id: 3,
    image_url: `${IMAGE_URL}/Refurbished_Seagate_STKX2000403_Game_Drive_for_Xbox_2TB_External_USB 3.2_Gen_1_Hard_Drive_Grey.jpg`,
  },
  {
    product_name: "Pokemon Ultraball Wireless Controller Nintendo Switch",
    price_usd: "$30.00",
    inventory_quantity: "3",
    description:
      "Refurbished PowerA 1511636-01 Enhanced Wireless Controller for Nintendo Switch Pokemon Ultra Ball",
    brand: "PowerA",
    category_id: 4,
    image_url: `${IMAGE_URL}/Refurbished_PowerA_1511636-01_Enhanced_Wireless_Controller_for_Nintendo_Switch_Pokemon_Ultra_Ball.jpg`,
  },
  {
    product_name: "Lite Hybrid System Armor Nintendo Switch",
    price_usd: "$8.00",
    inventory_quantity: "3",
    description:
      "Refurbished Hori NS2-054U Nintendo Switch Lite Hybrid System Armor (Yellow)",
    brand: "Hori",
    category_id: 4,
    image_url: `${IMAGE_URL}/Refurbished_Hori_0NS2-054U_Nintendo_Switch_Lite_Hybrid_System_Armor_(Yellow).jpg`,
  },
  {
    product_name: "Mario Wireless Controller Nintendo Switch",
    price_usd: "$31.00",
    inventory_quantity: "3",
    description: "Referbished Hori Nintendo Switch Gaming Controller",
    brand: "Hori",
    category_id: 4,
    image_url: `${IMAGE_URL}/Refurbished_Hori_Horipad_Mario_Gaming_Controller_Nintendo_Switch_(NS).jpg`,
  },
  {
    product_name: "Wolverine Ultimate Chroma Controller",
    price_usd: "$112.00",
    inventory_quantity: "3",
    description:
      "Multi-Purpose Refurbished Razer RZ06-02250100-R3U1 Wolverine Ultimate Chroma Controller - Xbox One, PC",
    brand: "Razer",
    category_id: 3,
    image_url: `${IMAGE_URL}/Refurbished_Razer_RZ06-02250100-R3U1_Wolverine_Ultimate_Chroma_Controller_Xbox_One_PC.jpg`,
  },
];

module.exports = {
  products,
};
