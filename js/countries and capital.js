const countriesAndCapitals = {
    'China': 'Beijing.',
    'Japan': 'Tokyo',
    'South Korea': 'Seoul',
    'Vietnam': 'Hanoï',
    'Malaysia': 'Kuala Lumpur',
};

for (const country in countriesAndCapitals) {
    const capital = countriesAndCapitals[country];
    console.log(`${country} has the capital named: ${capital}`);
  }