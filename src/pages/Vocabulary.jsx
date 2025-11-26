function Vocabulary() {
  const sampleWords = [
    { word: 'Ambiguous', meaning: 'Open to more than one interpretation; unclear', example: 'The instructions were ambiguous.' },
    { word: 'Benevolent', meaning: 'Kind, generous, and charitable', example: 'The benevolent donor gave millions to charity.' },
    { word: 'Candid', meaning: 'Truthful and straightforward', example: 'She gave a candid opinion about the project.' },
    { word: 'Diligent', meaning: 'Showing careful effort in ones work', example: 'His diligent study habits paid off.' },
    { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking', example: 'The speaker gave an eloquent speech.' },
    { word: 'Frivolous', meaning: 'Not serious or important; lacking in seriousness', example: 'He spent money on frivolous purchases.' },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">📝 Vocabulary</h1>
        <p className="text-gray-600 mb-8">Build your vocabulary with high-frequency PSAT words</p>

        <div className="space-y-4">
          {sampleWords.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">{item.word}</h3>
                  <p className="text-gray-700 mb-3">{item.meaning}</p>
                  <p className="text-sm text-gray-600 italic">
                    <span className="font-medium">Example:</span> {item.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">💡 Learning Tip</h3>
          <p className="text-gray-700">Create flashcards and review 5-10 new words daily. Use the words in sentences to reinforce learning.</p>
        </div>
      </div>
    </div>
  )
}

export default Vocabulary
