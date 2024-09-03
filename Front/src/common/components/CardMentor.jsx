import { Star, Heart } from "lucide-react";

export default function Card() {
  return (
    <div className="w-full max-w-sm">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Imagen de fondo */}
        <img
          src="data:image/jpeg;base64,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"
          alt="Mauricio Pyme"
          className="w-[384px] h-[353px] object-cover"
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Botón de favorito */}
        <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm">
          <Heart className="w-6 h-6 text-white" />
        </button>

        {/* Contenido de la tarjeta */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-2xl font-bold text-white mb-1">Emprende</h2>
          <div className="flex ">
            <p className="text-white/90 mb-2">Mauricio Pyme</p>
            {/* Calificación */}
            <div className="ml-1 flex items-center mb-2">
              <span className="text-white ml-1">4.0 (40)</span>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
          </div>
          <div className="flex ">
            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1  border-violeta border-2 text-white text-xs rounded-md backdrop-blur-xl bg-violeta/20">
                Afip
              </span>
              <span className="px-2 py-1  border-violeta border-2 text-white text-xs rounded-md backdrop-blur-xl bg-violeta/20">
                Emprenimiento
              </span>
              <span className="px-2 py-1  border-violeta border-2 text-white text-xs rounded-md backdrop-blur-xl bg-violeta/20">
                Negocios
              </span>
            </div>

            {/* Rango de precios */}
            <p className="text-white font-semibold">$100 - $250</p>
          </div>
        </div>
      </div>
    </div>
  );
}
