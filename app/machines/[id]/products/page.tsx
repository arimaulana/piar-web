import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { v4 as uuidv4 } from "uuid";

import { IMachine, IProduct, IProductCategory } from "@/types";

const getMachineById = async (id: string) => {
  const mockedMachine: IMachine = {
    machineId: id,
    machineName: "Vending Machine 001",
    machineCode: "VEN-001",
    note: "",
    isActive: true,
  };

  return mockedMachine;
};

const getProductsByMachineId = async (machineId: string) => {
  const generateCategory = (name: string, note?: string): IProductCategory => {
    return {
      productCategoryId: uuidv4(),
      productCategoryName: name,
      note: note || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
    };
  };

  const generateProduct = (
    name: string,
    category: IProductCategory,
    price: number,
    stock: number,
    imageUrl?: string,
    note?: string
  ): IProduct => {
    return {
      productId: uuidv4(),
      productCategoryId: category.productCategoryId,
      productCategoryName: category.productCategoryName,
      productName: name,
      productImageUrl: imageUrl || "",
      productPrice: price,
      productStock: stock,
      note: note || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: new Date().toISOString(),
      modUserId: uuidv4(),
      modDate: new Date().toISOString(),
    };
  };

  const foodCategory = generateCategory("Makanan", "Aneka Makanan");
  const drinkCategory = generateCategory("Minuman", "Aneka Minuman");
  const otherCategory = generateCategory("Lainnya", "Aneka Lainnya");

  const foodSample = generateProduct(
    "Frozen Bakmi Jawa",
    foodCategory,
    15000,
    15,
    "https://images.unsplash.com/photo-1653049525170-d062fd2c39e6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "lorem ipsum"
  );
  const drinkSample = generateProduct(
    "Teh Botol",
    drinkCategory,
    5000,
    50,
    "https://plus.unsplash.com/premium_photo-1676298609887-20781d44ecab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  const otherSample = generateProduct(
    "Gunting",
    otherCategory,
    8000,
    20,
    "https://images.unsplash.com/photo-1621289240407-219dc337160b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  return [
    foodSample,
    drinkSample,
    otherSample,
    generateProduct(
      "Nasi Uduk",
      foodCategory,
      15000,
      25,
      "https://images.unsplash.com/photo-1709201761899-7b36ce377f86?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Jus Apel",
      drinkCategory,
      10000,
      30,
      "https://plus.unsplash.com/premium_photo-1663089590359-6ec775dd518e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Kertas A4 1 Rim",
      otherCategory,
      40000,
      50,
      "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Soto Ayam",
      foodCategory,
      18000,
      30,
      "https://images.unsplash.com/photo-1681378128359-a5c2492a3535?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Es Teh Manis",
      drinkCategory,
      6000,
      50,
      "https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Penggaris",
      otherCategory,
      3000,
      75,
      "https://images.unsplash.com/photo-1502043150060-b01aa3030556?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Kebab",
      foodCategory,
      12000,
      10,
      "https://images.unsplash.com/photo-1545092714-55b264ca417d?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
    generateProduct(
      "Jus Jeruk",
      drinkCategory,
      12000,
      10,
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      ""
    ),
    generateProduct(
      "Kertas Polio 1 Rim",
      otherCategory,
      40000,
      40,
      "https://images.unsplash.com/photo-1532153354457-5fbe1a3bb0b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ""
    ),
  ];
};

export default async function MachineProductPage({
  params,
}: {
  params: { id: string };
}) {
  const machine = await getMachineById(params.id);

  const products = await getProductsByMachineId(machine.machineId);

  // TODO: check is having active session? if any, redirect to products page

  return (
    <section>
      <div>
        <h1>Products</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {products.map((p) => {
          const cat =
            p.productCategoryName == "Makanan"
              ? "food"
              : p.productCategoryName == "Minuman"
                ? "drink"
                : "toy";

          return (
            <Card
              key={p.productId}
              isPressable
              shadow="sm"
              // onPress={() => console.log("added to the cart")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={p.productName}
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={p.productImageUrl}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{p.productName}</b>
                <p className="text-default-500">{p.productPrice}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
