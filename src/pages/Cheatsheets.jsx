function Cheatsheets() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📋 Cheatsheets</h1>
        <p className="text-gray-600 mb-8">Quick reference guides for formulas and rules</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">📐 Math Formulas</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-primary-600 pl-4 py-2">
                <p className="font-semibold">Quadratic Formula</p>
                <p className="text-sm text-gray-600">x = (-b ± √(b² - 4ac)) / 2a</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4 py-2">
                <p className="font-semibold">Area of Triangle</p>
                <p className="text-sm text-gray-600">A = ½ × base × height</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4 py-2">
                <p className="font-semibold">Pythagorean Theorem</p>
                <p className="text-sm text-gray-600">a² + b² = c²</p>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">View All Formulas</button>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">📖 Grammar Rules</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold">Subject-Verb Agreement</p>
                <p className="text-sm text-gray-600">Subjects and verbs must agree in number</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold">Parallel Structure</p>
                <p className="text-sm text-gray-600">Similar ideas should use similar grammar</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold">Comma Usage</p>
                <p className="text-sm text-gray-600">Use commas to separate items in lists</p>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">View All Rules</button>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">🖨️ Printable Resources</h3>
          <p className="text-gray-600 mb-4">Download and print these cheatsheets for easy reference during study sessions.</p>
          <div className="flex gap-4">
            <button className="btn-secondary">📥 Download Math Formulas</button>
            <button className="btn-secondary">📥 Download Grammar Guide</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cheatsheets
