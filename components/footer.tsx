import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marca%20Hawk%20-%20Azul-04%20%281%29-DgfjbeywOB5bk5VVxkzLLECOV0raaM.png"
              alt="Hawk Logo"
              width={240}
              height={80}
              className="h-20 w-auto brightness-0 invert"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/80 text-sm">© 2026 Hawk Marketing. Todos os direitos reservados.</p>
            <p className="text-white/60 text-xs mt-1">Acelera Vendas 2026 - Evento Presencial Gratuito</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
