import { useEffect, useState } from "react";
import Card from "./components/Card";
import Mentores from "../common/data/Mentores.json";

const categories = [
  {
    title: "Populares",
    items: ["Diseño web", "Arte", "Programación", "Matemáticas"],
  },
  { title: "Relacionadas", items: ["Física", "Química", "Negocios"] },
  {
    title: "Todas",
    items: [
      "Arte",
      "Biología",
      "Cocina",
      "Deportes",
      "Diseño",
      "Física",
      "Matemáticas",
      "Música",
      "Negocios",
      "Oratoria",
      "Programación",
      "Química",
      "Salud",
    ],
  },
];

const suggestedSkills = ["Geometría", "Aritmética", "Ecuaciones"];

const MentorSearchAndFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["Matemáticas"]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(true); // Estado para desplegar categorías
  const [isSkillsOpen, setIsSkillsOpen] = useState(true); // Estado para desplegar habilidades
  const [isPriceOpen, setIsPriceOpen] = useState(true); // Estado para desplegar precio
  const [maxPrice, setMaxPrice] = useState(1000); // Estado para desplegar precio

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSkills([]);
    setPriceRange([0, 500]);
  };

  useEffect(() => {
    if (maxPrice <= priceRange[1]) {
      setMaxPrice(priceRange[1]);
    }
  }, [maxPrice, priceRange]);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setPriceRange([priceRange[0], newValue]);
  };

  const getBackgroundSize = () => {
    const percentage =
      ((priceRange[1] - priceRange[0]) / (maxPrice - priceRange[0])) * 100;
    return `${percentage}% 100%`;
  };

  return (
    <div className="container mx-auto p-4 flex mt-[80px] flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        <form onSubmit={(e) => e.preventDefault()} className="mb-4">
          <div className="relative flex items-center border-[1.5px] h-[52px] border-[#BDBDBE] rounded-md">
            <img src="./icons/lupa.svg" className="ml-3" />
            <input
              type="text"
              placeholder="Buscar mentores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-3 pr-4 py-2 w-full outline-none"
            />
          </div>
        </form>

        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCategories.map((category) => (
            <span
              key={category}
              className="flex h-[25px] items-center pl-2 pr-1 text-[#545557] border-[#545557] border-[1px] text-sm font-semibold rounded-[4px] backdrop-blur-xl"
            >
              {category}
              <button
                onClick={() => toggleCategory(category)}
                className="flex rounded-full w-[16px] h-[16px] bg-gradient-primary items-center justify-center ml-[7px] text-white"
              >
                &times;
              </button>
            </span>
          ))}
          {selectedCategories.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Limpiar Filtros
            </button>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-1 text-[#545557]">
            7 Resultados
          </h2>
          <div className="flex justify-between ">
            <p className="text-black font-semibold text-lg ">
              Resultados búsqueda "matemáticas"
            </p>
        {/* Colocar un limite de escritura en el buscador */}

            <div className="flex flex-nowrap h-[21px]">
              <button className="text-sm text-[#545557] font-semibold">Ordenar Por </button>
              <img src="./icons/orderArrow.svg" className="ml-2  size-5" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {Mentores.map((mentor) => (
            <Card key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>

      <div className="w-[506px]">
        {/* Categorías */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between w-full p-2 font-semibold bg-gray-100 rounded-t-lg cursor-pointer"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            Categorías
            <img
              src="./icons/triangle.svg"
              className={`h-4 w-4 transform transition-transform ${
                isCategoryOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isCategoryOpen && (
            <div className="p-2 border border-t-0 rounded-b-lg">
              {categories.map((category) => (
                <div key={category.title} className="mb-4">
                  <h3 className="font-semibold text-violeta mb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className={`cursor-pointer px-1  border-[#545557] border-[1px] h-[22px] text-sm rounded-[4px] backdrop-blur-xl ${
                          selectedCategories.includes(item)
                            ? "bg-gradient-primary text-white"
                            : "bg-white text-[#545557]"
                        }`}
                        onClick={() => toggleCategory(item)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Habilidades */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between w-full p-2 font-semibold bg-gray-100 rounded-t-lg cursor-pointer"
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
          >
            Habilidades
            <img
              src="./icons/triangle.svg"
              className={`h-4 w-4 transform transition-transform ${
                isSkillsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isSkillsOpen && (
            <div className="p-2 border border-t-0 rounded-b-lg">
              <div className="relative flex items-center border-[1.5px] h-[48px] border-[#BDBDBE] rounded-md">
                <img src="./icons/lupa.svg" className="ml-3" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-3 pr-4 text-[#2E2E2E] placeholder:font-semibold placeholder:text-sm placeholder:text-[#2E2E2E] w-full outline-none"
                />
              </div>
              <h3 className="font-semibold text-purple-600 mb-2 mt-2">
                Sugeridas
              </h3>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`cursor-pointer px-1  border-[#545557] border-[1px] h-[22px] text-sm rounded-[4px]  ${
                      selectedSkills.includes(skill)
                        ? "bg-gradient-primary text-white"
                        : "bg-white text-[#545557]"
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Precio */}

        <div className="mb-4">
          <div
            className={`flex items-center justify-between w-full p-2 font-semibold bg-gray-100 rounded-t-lg cursor-pointer`}
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            Precio
            <img
              src="./icons/triangle.svg"
              className={`h-4 w-4 transform transition-transform ${
                isPriceOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isPriceOpen && (
            <div>
              <label
                htmlFor="price-range-slider"
                className="block text-sm font-medium text-gray-700"
              >
                Rango de precio
              </label>

              <input
                type="range"
                id="price-range-slider"
                min={priceRange[0]}
                max={maxPrice}
                value={priceRange[1]}
                onChange={handleSliderChange}
                className="w-full mt-1 appearance-none h-2 rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #d300cf ${getBackgroundSize()}, #E5E7EB 0%)`,
                }}
              />

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{priceRange[0]}</span>
                <span className="text-sm text-gray-600">{priceRange[1]}</span>
                <span className="text-sm text-gray-600">Max</span>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <label
                    htmlFor="min-price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Desde
                  </label>
                  <input
                    type="number"
                    id="min-price"
                    value={priceRange[0]}
                    onChange={(e) => {
                      const newMin = parseInt(e.target.value);
                      if (newMin <= priceRange[1]) {
                        setPriceRange([newMin, priceRange[1]]);
                      }
                    }}
                    className="mt-1 w-24 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label
                    htmlFor="max-price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hasta
                  </label>
                  <input
                    type="number"
                    id="max-price"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const newMax = parseInt(e.target.value);
                      if (newMax >= priceRange[0]) {
                        setPriceRange([priceRange[0], newMax]);
                      }
                    }}
                    className="mt-1 w-24 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorSearchAndFilter;
