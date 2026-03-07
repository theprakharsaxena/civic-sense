export default function CivicSenseInfo() {
  return (
    <div className="max-w-[1000px] mx-auto py-16 px-6 md:px-8 border-t border-stone-200">
      <h2 className="text-2xl font-semibold mb-8 text-stone-900">What kinds of things can you report?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Roads & Infrastructure</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Potholes, broken sidewalks, damaged street signs, or malfunctioning traffic lights.</p>
        </div>
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Sanitation & Environment</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Illegal dumping, overflowing public bins, dead animals, or serious drainage issues.</p>
        </div>
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Parks & Public Spaces</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Vandalism in parks, broken playground equipment, or unmaintained public facilities.</p>
        </div>
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Trees & Vegetation</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Fallen branches blocking roads, overgrown bushes obstructing stop signs.</p>
        </div>
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Public Safety</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Dark spots causing safety concerns or hazards in pedestrian zones.</p>
        </div>
        <div>
          <h3 className="font-medium text-stone-900 mb-2">Vehicles & Traffic</h3>
          <p className="text-sm text-stone-600 leading-relaxed">Abandoned vehicles taking up space for weeks, or chronic illegal parking spots.</p>
        </div>
      </div>
    </div>
  );
}
