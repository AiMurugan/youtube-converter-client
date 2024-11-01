export default function BackgroundDots() {
  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-300">
      <div
        className="absolute inset-0 dark:bg-black bg-white"
        style={{
          backgroundImage: `radial-gradient(rgb(75 75 75 / 0.5) 1px, transparent 1.5px)`,
          backgroundSize: '16px 16px'
        }}
      />
    </div>
  )
}