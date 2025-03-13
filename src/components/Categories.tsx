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
            title: "Breakfast", 
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
        <div className="mx-3 md:mx-[50px] mt-[63px] mb-[56px]">
            <p className="font-bold text-[16px] md:text-[32px]">Order.uk Popular Categories 🤩</p>
            <div className="flex justify-between flex-wrap overflow-x-scroll no-scrollbar mt-[51px]">
                {data.map((item, index) => (
                    <div key={index} className="max-w-[189px] max-h-[211px] md:w-[238px] md:h-[266px] rounded-[12px] flex flex-col mb-[26px]">
                        <img src={item.image} alt={item.title} className="h-[203px]" />
                        <div className="flex flex-col justify-center px-2 bg-[#03081F] h-[63px] rounded-b-[12px]">
                            <p className="font-bold text-[1px] md:text-[16px] text-[#FC8A06]">{item.title}</p>
                            <p className="text-[13px] text-white">{item.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
