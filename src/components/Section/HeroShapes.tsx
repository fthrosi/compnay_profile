export default function HeroShapes() {
  return (
    <div className="relative w-full h-[450px] mt-10">
      {/* SHAPE BIRU MUDA */}
      <div
        className="absolute bg-[#A8C8FF]"
        style={{
          width: 225,
          height: 225,
          top: 120,
          left: 790,
          borderTopLeftRadius: 70,
          borderTopRightRadius: 18,
          borderBottomRightRadius: 18,
          borderBottomLeftRadius: 18,
        }}
      />

      {/* SHAPE KUNING (Woman) + CUT KIRI */}
      <div
        className="absolute bg-[#FFD66B] flex justify-end items-end p-4"
        style={{
          width: 225,
          height: 260,
          left: 1030,
          top: 160,
          clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)",
        }}
      >
        {/* Globe */}
        <img
          src="/images/globe.png"
          className="absolute"
          style={{
            width: 55,
            top: -16,
            left: -16,
          }}
        />
      </div>

      {/* SHAPE BIRU (Team) + TERPOTONG OLEH SHAPE BIRU MUDA */}
      <div
        className="absolute bg-[#79A2FF]"
        style={{
          width: 343,
          height: 223,
          top: 282,
          left: 913,
          clipPath: "circle(85% at 0% 0%)",
        }}
      />
    </div>
  );
}
