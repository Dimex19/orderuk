const Categories = () => {
    const data = [
        {
            title: "Burgers & Fast food",
            paragraph: "21 Restaurants",
            image: "/assets/burger.png",
        },
        {
            title: "Salads",
            paragraph: "32 Restaurants",
            image: "/assets/salad.png",
        },
        {
            title: "Pasta & Casuals",
            paragraph: "4 Restaurants",
            image: "/assets/pasta.png",
        },
        {
            title: "Pizza",
            paragraph: "32 Restaurants",
            image: "/assets/pizza.png",
        },
        {
            title: "Breakfast", // Fixed spelling
            paragraph: "4 Restaurants",
            image: "/assets/breakfast.png",
        },
        {
            title: "Soups",
            paragraph: "32 Restaurants",
            image: "/assets/soup.png",
        },
    ];

    return (
        <div className="ml-[100px] mr-[100px] mt-[63px] mb-[56px]">
            <p className="font-bold text-[32px]">Order.uk Popular Categories 🤩</p>
            <div className="flex justify-between overflow-x-scroll no-scrollbar mt-[51px]">
                {data.map((item, index) => (
                    <div key={index} className="w-[238px] h-[266px] rounded-[12px] flex flex-col">
                        <img src={item.image} alt={item.title} className="h-[203px]" />
                        <div className="bg-[#03081F] pl-[22px] pt-[9px] h-[63px] rounded-b-[12px]">
                            <p className="font-bold text-[18px] text-[#FC8A06]">{item.title}</p>
                            <p className="text-[13px] text-white">{item.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
