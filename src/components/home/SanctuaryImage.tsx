// src/components/SanctuaryImage.tsx
export default function SanctuaryImage() {
  return (
    <div className="relative">
      {/* Este contenedor se "sale" del contenedor padre */}
      <div className="w-screen relative left-1/2 -ml-[50vw]">
        <img
          src="https://pub-858a9865baad48afa914044f2883a089.r2.dev/img/sanctuary/venue.jpg"
          alt="Sanctuary Detail"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
