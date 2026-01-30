const champions = [
    { id: "Aatrox", name: "Aatrox", gender: "Male", position: "Top", species: "Darkin", resource: "Manaless", range: "Melee", region: "Runeterra", year: 2013 },
    { id: "Ahri", name: "Ahri", gender: "Female", position: "Mid", species: "Vastaya", resource: "Mana", range: "Ranged", region: "Ionia", year: 2011 },
    { id: "Akali", name: "Akali", gender: "Female", position: "Top, Mid", species: "Human", resource: "Energy", range: "Melee", region: "Ionia", year: 2010 },
    { id: "Akshan", name: "Akshan", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Shurima", year: 2021 },
    { id: "Alistar", name: "Alistar", gender: "Male", position: "Support", species: "Minotaur", resource: "Mana", range: "Melee", region: "Runeterra", year: 2009 },
    { id: "Ambessa", name: "Ambessa", gender: "Female", position: "Top", species: "Human", resource: "Energy", range: "Melee", region: "Noxus", year: 2024 },
    { id: "Amumu", name: "Amumu", gender: "Male", position: "Jungle", species: "Yordle", resource: "Mana", range: "Melee", region: "Shurima", year: 2009 },
    { id: "Anivia", name: "Anivia", gender: "Female", position: "Mid", species: "God-Warrior", resource: "Mana", range: "Ranged", region: "Freljord", year: 2009 },
    { id: "Annie", name: "Annie", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2009 },
    { id: "Aphelios", name: "Aphelios", gender: "Male", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Targon", year: 2019 },
    { id: "Ashe", name: "Ashe", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Freljord", year: 2009 },
    { id: "AurelionSol", name: "Aurelion Sol", gender: "Male", position: "Mid", species: "Celestial Dragon", resource: "Mana", range: "Ranged", region: "Targon", year: 2016 },
    { id: "Aurora", name: "Aurora", gender: "Female", position: "Mid, Top", species: "Vastaya", resource: "Mana", range: "Ranged", region: "Freljord", year: 2024 },
    { id: "Azir", name: "Azir", gender: "Male", position: "Mid", species: "God-Warrior", resource: "Mana", range: "Ranged", region: "Shurima", year: 2014 },
    { id: "Bard", name: "Bard", gender: "Male", position: "Support", species: "Celestial", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2015 },
    { id: "Belveth", name: "Bel'Veth", gender: "Female", position: "Jungle", species: "Void", resource: "Manaless", range: "Melee", region: "Void", year: 2022 },
    { id: "Blitzcrank", name: "Blitzcrank", gender: "Other", position: "Support", species: "Golem", resource: "Mana", range: "Melee", region: "Zaun", year: 2009 },
    { id: "Brand", name: "Brand", gender: "Male", position: "Mid, Support", species: "Human", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2011 },
    { id: "Braum", name: "Braum", gender: "Male", position: "Support", species: "Human", resource: "Mana", range: "Melee", region: "Freljord", year: 2014 },
    { id: "Briar", name: "Briar", gender: "Female", position: "Jungle", species: "Vampire", resource: "Health", range: "Melee", region: "Noxus", year: 2023 },
    { id: "Caitlyn", name: "Caitlyn", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Piltover", year: 2011 },
    { id: "Camille", name: "Camille", gender: "Female", position: "Top", species: "Cyborg", resource: "Mana", range: "Melee", region: "Piltover", year: 2016 },
    { id: "Cassiopeia", name: "Cassiopeia", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Noxus", year: 2010 },
    { id: "Chogath", name: "Cho'Gath", gender: "Male", position: "Top", species: "Void", resource: "Mana", range: "Melee", region: "Void", year: 2009 },
    { id: "Corki", name: "Corki", gender: "Male", position: "Mid", species: "Yordle", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2009 },
    { id: "Darius", name: "Darius", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Noxus", year: 2012 },
    { id: "Diana", name: "Diana", gender: "Female", position: "Jungle, Mid", species: "Aspect", resource: "Mana", range: "Melee", region: "Targon", year: 2012 },
    { id: "DrMundo", name: "Dr. Mundo", gender: "Male", position: "Top", species: "Human", resource: "Health", range: "Melee", region: "Zaun", year: 2009 },
    { id: "Draven", name: "Draven", gender: "Male", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Noxus", year: 2012 },
    { id: "Ekko", name: "Ekko", gender: "Male", position: "Jungle, Mid", species: "Human", resource: "Mana", range: "Melee", region: "Zaun", year: 2015 },
    { id: "Elise", name: "Elise", gender: "Female", position: "Jungle", species: "Human", resource: "Mana", range: "Melee, Ranged", region: "Shadow Isles", year: 2012 },
    { id: "Evelynn", gender: "Female", id: "Evelynn", name: "Evelynn", position: "Jungle", species: "Demon", resource: "Mana", range: "Melee", region: "Runeterra", year: 2009 },
    { id: "Ezreal", name: "Ezreal", gender: "Male", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Piltover", year: 2010 },
    { id: "Fiddlesticks", name: "Fiddlesticks", gender: "Other", position: "Jungle", species: "Demon", resource: "Mana", range: "Melee", region: "Runeterra", year: 2009 },
    { id: "Fiora", name: "Fiora", gender: "Female", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Demacia", year: 2012 },
    { id: "Fizz", name: "Fizz", gender: "Male", position: "Mid", species: "Yordle", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2011 },
    { id: "Galio", name: "Galio", gender: "Male", position: "Mid, Support", species: "Golem", resource: "Mana", range: "Melee", region: "Demacia", year: 2010 },
    { id: "Gangplank", name: "Gangplank", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2009 },
    { id: "Garen", name: "Garen", gender: "Male", position: "Top", species: "Human", resource: "Manaless", range: "Melee", region: "Demacia", year: 2010 },
    { id: "Gnar", name: "Gnar", gender: "Male", position: "Top", species: "Yordle", resource: "Rage", range: "Melee, Ranged", region: "Freljord", year: 2014 },
    { id: "Gragas", name: "Gragas", gender: "Male", position: "Top, Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Freljord", year: 2010 },
    { id: "Graves", name: "Graves", gender: "Male", position: "Jungle", species: "Human", resource: "Mana", range: "Ranged", region: "Bilgewater", year: 2011 },
    { id: "Gwen", name: "Gwen", gender: "Female", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Shadow Isles", year: 2021 },
    { id: "Hecarim", name: "Hecarim", gender: "Male", position: "Jungle", species: "Undead", resource: "Mana", range: "Melee", region: "Shadow Isles", year: 2012 },
    { id: "Heimerdinger", name: "Heimerdinger", gender: "Male", position: "Mid, Support", species: "Yordle", resource: "Mana", range: "Ranged", region: "Piltover", year: 2009 },
    { id: "Hwei", name: "Hwei", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Ionia", year: 2023 },
    { id: "Illaoi", name: "Illaoi", gender: "Female", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2015 },
    { id: "Irelia", name: "Irelia", gender: "Female", position: "Top, Mid", species: "Human", resource: "Mana", range: "Melee", region: "Ionia", year: 2010 },
    { id: "Ivern", name: "Ivern", gender: "Male", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Ionia", year: 2016 },
    { id: "Janna", name: "Janna", gender: "Female", position: "Support", species: "God", resource: "Mana", range: "Ranged", region: "Zaun", year: 2009 },
    { id: "JarvanIV", name: "Jarvan IV", gender: "Male", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Demacia", year: 2011 },
    { id: "Jax", name: "Jax", gender: "Male", position: "Top, Jungle", species: "Unknown", resource: "Mana", range: "Melee", region: "Icathia", year: 2009 },
    { id: "Jayce", name: "Jayce", gender: "Male", position: "Top, Mid", species: "Human", resource: "Mana", range: "Melee, Ranged", region: "Piltover", year: 2012 },
    { id: "Jhin", name: "Jhin", gender: "Male", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Ionia", year: 2016 },
    { id: "Jinx", name: "Jinx", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Zaun", year: 2013 },
    { id: "Kaisa", name: "Kai'Sa", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Void", year: 2018 },
    { id: "Kalista", name: "Kalista", gender: "Female", position: "Bottom", species: "Undead", resource: "Mana", range: "Ranged", region: "Shadow Isles", year: 2014 },
    { id: "Karma", name: "Karma", gender: "Female", position: "Support, Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Ionia", year: 2011 },
    { id: "Karthus", name: "Karthus", gender: "Male", position: "Jungle", species: "Undead", resource: "Mana", range: "Ranged", region: "Shadow Isles", year: 2009 },
    { id: "Kassadin", name: "Kassadin", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Melee", region: "Void", year: 2009 },
    { id: "Katarina", name: "Katarina", gender: "Female", position: "Mid", species: "Human", resource: "Manaless", range: "Melee", region: "Noxus", year: 2009 },
    { id: "Kayle", name: "Kayle", gender: "Female", position: "Top", species: "Aspect", resource: "Mana", range: "Melee, Ranged", region: "Demacia", year: 2009 },
    { id: "Kayn", name: "Kayn", gender: "Male", position: "Jungle", species: "Human, Darkin", resource: "Mana", range: "Melee", region: "Ionia", year: 2017 },
    { id: "Kennen", name: "Kennen", gender: "Male", position: "Top", species: "Yordle", resource: "Energy", range: "Ranged", region: "Ionia", year: 2010 },
    { id: "Khazix", name: "Kha'Zix", gender: "Male", position: "Jungle", species: "Void", resource: "Mana", range: "Melee", region: "Void", year: 2012 },
    { id: "Kindred", name: "Kindred", gender: "Other", position: "Jungle", species: "God", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2015 },
    { id: "Kled", name: "Kled", gender: "Male", position: "Top", species: "Yordle", resource: "Courage", range: "Melee", region: "Noxus", year: 2016 },
    { id: "KogMaw", name: "Kog'Maw", gender: "Male", position: "Bottom", species: "Void", resource: "Mana", range: "Ranged", region: "Void", year: 2010 },
    { id: "Ksante", name: "K'Sante", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Shurima", year: 2022 },
    { id: "Leblanc", name: "LeBlanc", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Noxus", year: 2010 },
    { id: "LeeSin", name: "Lee Sin", gender: "Male", position: "Jungle", species: "Human", resource: "Energy", range: "Melee", region: "Ionia", year: 2011 },
    { id: "Leona", name: "Leona", gender: "Female", position: "Support", species: "Aspect", resource: "Mana", range: "Melee", region: "Targon", year: 2011 },
    { id: "Lillia", name: "Lillia", gender: "Female", position: "Jungle", species: "Fawn", resource: "Mana", range: "Melee", region: "Ionia", year: 2020 },
    { id: "Lissandra", name: "Lissandra", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Freljord", year: 2013 },
    { id: "Lucian", name: "Lucian", gender: "Male", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Demacia", year: 2013 },
    { id: "Lulu", name: "Lulu", gender: "Female", position: "Support", species: "Yordle", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2012 },
    { id: "Lux", name: "Lux", gender: "Female", position: "Mid, Support", species: "Human", resource: "Mana", range: "Ranged", region: "Demacia", year: 2010 },
    { id: "Malphite", name: "Malphite", gender: "Male", position: "Top", species: "Golem", resource: "Mana", range: "Melee", region: "Ixtal", year: 2009 },
    { id: "Malzahar", name: "Malzahar", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Void", year: 2010 },
    { id: "Maokai", name: "Maokai", gender: "Male", position: "Jungle, Support", species: "Spirit", resource: "Mana", range: "Melee", region: "Shadow Isles", year: 2011 },
    { id: "MasterYi", name: "Master Yi", gender: "Male", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Ionia", year: 2009 },
    { id: "Milio", name: "Milio", gender: "Male", position: "Support", species: "Human", resource: "Mana", range: "Ranged", region: "Ixtal", year: 2023 },
    { id: "MissFortune", name: "Miss Fortune", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Bilgewater", year: 2009 },
    { id: "Mordekaiser", name: "Mordekaiser", gender: "Male", position: "Top", species: "Wraith", resource: "Shield", range: "Melee", region: "Noxus", year: 2010 },
    { id: "Morgana", name: "Morgana", gender: "Female", position: "Support", species: "Aspect", resource: "Mana", range: "Ranged", region: "Demacia", year: 2009 },
    { id: "Naafiri", name: "Naafiri", gender: "Female", position: "Mid", species: "Darkin", resource: "Mana", range: "Melee", region: "Shurima", year: 2023 },
    { id: "Nami", name: "Nami", gender: "Female", position: "Support", species: "Vastaya", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2012 },
    { id: "Nasus", name: "Nasus", gender: "Male", position: "Top", species: "God-Warrior", resource: "Mana", range: "Melee", region: "Shurima", year: 2009 },
    { id: "Nautilus", name: "Nautilus", gender: "Male", position: "Support", species: "Unknown", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2012 },
    { id: "Neeko", name: "Neeko", gender: "Female", position: "Mid, Support", species: "Vastaya", resource: "Mana", range: "Ranged", region: "Ixtal", year: 2018 },
    { id: "Nidalee", name: "Nidalee", gender: "Female", position: "Jungle", species: "Human", resource: "Mana", range: "Melee, Ranged", region: "Ixtal", year: 2009 },
    { id: "Nilah", name: "Nilah", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2022 },
    { id: "Nocturne", name: "Nocturne", gender: "Other", position: "Jungle", species: "Demon", resource: "Mana", range: "Melee", region: "Runeterra", year: 2011 },
    { id: "Nunu", name: "Nunu & Willump", gender: "Male", position: "Jungle", species: "Human, Yeti", resource: "Mana", range: "Melee", region: "Freljord", year: 2009 },
    { id: "Olaf", name: "Olaf", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Freljord", year: 2010 },
    { id: "Orianna", name: "Orianna", gender: "Female", position: "Mid", species: "Golem", resource: "Mana", range: "Ranged", region: "Piltover", year: 2011 },
    { id: "Ornn", name: "Ornn", gender: "Male", position: "Top", species: "God", resource: "Mana", range: "Melee", region: "Freljord", year: 2017 },
    { id: "Pantheon", name: "Pantheon", gender: "Male", position: "Top, Mid, Support", species: "Aspect", resource: "Mana", range: "Melee", region: "Targon", year: 2010 },
    { id: "Poppy", name: "Poppy", gender: "Female", position: "Top, Jungle", species: "Yordle", resource: "Mana", range: "Melee", region: "Demacia", year: 2010 },
    { id: "Pyke", name: "Pyke", gender: "Male", position: "Support", species: "Wraith", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2018 },
    { id: "Qiyana", name: "Qiyana", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Melee", region: "Ixtal", year: 2019 },
    { id: "Quinn", name: "Quinn", gender: "Female", position: "Top", species: "Human", resource: "Mana", range: "Ranged", region: "Demacia", year: 2013 },
    { id: "Rakan", name: "Rakan", gender: "Male", position: "Support", species: "Vastaya", resource: "Mana", range: "Melee", region: "Ionia", year: 2017 },
    { id: "Rammus", name: "Rammus", gender: "Male", position: "Jungle", species: "Unknown", resource: "Mana", range: "Melee", region: "Shurima", year: 2009 },
    { id: "RekSai", name: "Rek'Sai", gender: "Female", position: "Jungle", species: "Void", resource: "Rage", range: "Melee", region: "Void", year: 2014 },
    { id: "Rell", name: "Rell", gender: "Female", position: "Support", species: "Human", resource: "Mana", range: "Melee", region: "Noxus", year: 2020 },
    { id: "Renata", name: "Renata Glasc", gender: "Female", position: "Support", species: "Human", resource: "Mana", range: "Ranged", region: "Zaun", year: 2022 },
    { id: "Renekton", name: "Renekton", gender: "Male", position: "Top", species: "God-Warrior", resource: "Fury", range: "Melee", region: "Shurima", year: 2011 },
    { id: "Rengar", name: "Rengar", gender: "Male", position: "Jungle", species: "Vastaya", resource: "Ferocity", range: "Melee", region: "Ixtal", year: 2012 },
    { id: "Riven", name: "Riven", gender: "Female", position: "Top", species: "Human", resource: "Manaless", range: "Melee", region: "Noxus", year: 2011 },
    { id: "Rumble", name: "Rumble", gender: "Male", position: "Top", species: "Yordle", resource: "Heat", range: "Melee", region: "Bandle City", year: 2011 },
    { id: "Ryze", name: "Ryze", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Runeterra", year: 2009 },
    { id: "Samira", name: "Samira", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Noxus", year: 2020 },
    { id: "Sejuani", name: "Sejuani", gender: "Female", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Freljord", year: 2012 },
    { id: "Senna", name: "Senna", gender: "Female", position: "Support", species: "Human", resource: "Mana", range: "Ranged", region: "Shadow Isles", year: 2019 },
    { id: "Seraphine", name: "Seraphine", gender: "Female", position: "Support, Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Piltover", year: 2020 },
    { id: "Sett", name: "Sett", gender: "Male", position: "Top", species: "Vastaya", resource: "Grit", range: "Melee", region: "Ionia", year: 2020 },
    { id: "Shaco", name: "Shaco", gender: "Male", position: "Jungle", species: "Spirit", resource: "Mana", range: "Melee", region: "Runeterra", year: 2009 },
    { id: "Shen", name: "Shen", gender: "Male", position: "Top", species: "Human", resource: "Energy", range: "Melee", region: "Ionia", year: 2010 },
    { id: "Shyvana", name: "Shyvana", gender: "Female", position: "Jungle", species: "Dragon", resource: "Fury", range: "Melee", region: "Demacia", year: 2011 },
    { id: "Singed", name: "Singed", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Zaun", year: 2009 },
    { id: "Sion", name: "Sion", gender: "Male", position: "Top", species: "Undead", resource: "Mana", range: "Melee", region: "Noxus", year: 2009 },
    { id: "Sivir", name: "Sivir", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Shurima", year: 2009 },
    { id: "Skarner", name: "Skarner", gender: "Male", position: "Jungle", species: "Brackern", resource: "Mana", range: "Melee", region: "Ixtal", year: 2011 },
    { id: "Smolder", name: "Smolder", gender: "Male", position: "Bottom", species: "Dragon", resource: "Mana", range: "Ranged", region: "Camavor", year: 2024 },
    { id: "Sona", name: "Sona", gender: "Female", position: "Support", species: "Human", resource: "Mana", range: "Ranged", region: "Demacia", year: 2010 },
    { id: "Soraka", name: "Soraka", gender: "Female", position: "Support", species: "Celestial", resource: "Mana", range: "Ranged", region: "Targon", year: 2009 },
    { id: "Swain", name: "Swain", gender: "Male", position: "Mid, Support", species: "Human", resource: "Mana", range: "Ranged", region: "Noxus", year: 2010 },
    { id: "Sylas", name: "Sylas", gender: "Male", position: "Mid, Top", species: "Human", resource: "Mana", range: "Melee", region: "Demacia", year: 2019 },
    { id: "Syndra", name: "Syndra", gender: "Female", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Ionia", year: 2012 },
    { id: "TahmKench", name: "Tahm Kench", gender: "Male", position: "Support, Top", species: "Demon", resource: "Mana", range: "Melee", region: "Bilgewater", year: 2015 },
    { id: "Taliyah", name: "Taliyah", gender: "Female", position: "Jungle, Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Shurima", year: 2016 },
    { id: "Talon", name: "Talon", gender: "Male", position: "Mid, Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Noxus", year: 2011 },
    { id: "Taric", name: "Taric", gender: "Male", position: "Support", species: "Aspect", resource: "Mana", range: "Melee", region: "Targon", year: 2009 },
    { id: "Teemo", name: "Teemo", gender: "Male", position: "Top", species: "Yordle", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2009 },
    { id: "Thresh", name: "Thresh", gender: "Male", position: "Support", species: "Undead", resource: "Mana", range: "Melee", region: "Shadow Isles", year: 2013 },
    { id: "Tristana", name: "Tristana", gender: "Female", position: "Bottom, Mid", species: "Yordle", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2009 },
    { id: "Trundle", name: "Trundle", gender: "Male", position: "Top, Jungle", species: "Troll", resource: "Mana", range: "Melee", region: "Freljord", year: 2010 },
    { id: "Tryndamere", name: "Tryndamere", gender: "Male", position: "Top", species: "Human", resource: "Fury", range: "Melee", region: "Freljord", year: 2009 },
    { id: "TwistedFate", name: "Twisted Fate", gender: "Male", position: "Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Bilgewater", year: 2009 },
    { id: "Twitch", name: "Twitch", gender: "Male", position: "Bottom", species: "Rat", resource: "Mana", range: "Ranged", region: "Zaun", year: 2009 },
    { id: "Udyr", name: "Udyr", gender: "Male", position: "Top, Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Freljord", year: 2009 },
    { id: "Urgot", name: "Urgot", gender: "Male", position: "Top", species: "Cyborg", resource: "Mana", range: "Ranged", region: "Zaun", year: 2010 },
    { id: "Varus", name: "Varus", gender: "Male", position: "Bottom, Mid", species: "Darkin", resource: "Mana", range: "Ranged", region: "Ionia", year: 2012 },
    { id: "Vayne", name: "Vayne", gender: "Female", position: "Bottom, Top", species: "Human", resource: "Mana", range: "Ranged", region: "Demacia", year: 2011 },
    { id: "Veigar", name: "Veigar", gender: "Male", position: "Mid", species: "Yordle", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2009 },
    { id: "Velkoz", name: "Vel'Koz", gender: "Male", position: "Mid, Support", species: "Void", resource: "Mana", range: "Ranged", region: "Void", year: 2014 },
    { id: "Vex", name: "Vex", gender: "Female", position: "Mid", species: "Yordle", resource: "Mana", range: "Ranged", region: "Shadow Isles", year: 2021 },
    { id: "Vi", name: "Vi", gender: "Female", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Piltover", year: 2012 },
    { id: "Viego", name: "Viego", gender: "Male", position: "Jungle", species: "Undead", resource: "Manaless", range: "Melee", region: "Camavor", year: 2021 },
    { id: "Viktor", name: "Viktor", gender: "Male", position: "Mid", species: "Cyborg", resource: "Mana", range: "Ranged", region: "Zaun", year: 2011 },
    { id: "Vladimir", name: "Vladimir", gender: "Male", position: "Mid, Top", species: "Human", resource: "Health", range: "Ranged", region: "Noxus", year: 2010 },
    { id: "Volibear", name: "Volibear", gender: "Male", position: "Top, Jungle", species: "God", resource: "Mana", range: "Melee", region: "Freljord", year: 2011 },
    { id: "Warwick", name: "Warwick", gender: "Male", position: "Jungle, Top", species: "Cyborg", resource: "Mana", range: "Melee", region: "Zaun", year: 2009 },
    { id: "MonkeyKing", name: "Wukong", gender: "Male", position: "Top, Jungle", species: "Vastaya", resource: "Mana", range: "Melee", region: "Ionia", year: 2011 },
    { id: "Xayah", name: "Xayah", gender: "Female", position: "Bottom", species: "Vastaya", resource: "Mana", range: "Ranged", region: "Ionia", year: 2017 },
    { id: "Xerath", name: "Xerath", gender: "Male", position: "Mid, Support", species: "God-Warrior", resource: "Mana", range: "Ranged", region: "Shurima", year: 2011 },
    { id: "XinZhao", name: "Xin Zhao", gender: "Male", position: "Jungle", species: "Human", resource: "Mana", range: "Melee", region: "Demacia", year: 2010 },
    { id: "Yasuo", name: "Yasuo", gender: "Male", position: "Mid", species: "Human", resource: "Flow", range: "Melee", region: "Ionia", year: 2013 },
    { id: "Yone", name: "Yone", gender: "Male", position: "Mid, Top", species: "Human", resource: "Manaless", range: "Melee", region: "Ionia", year: 2020 },
    { id: "Yorick", name: "Yorick", gender: "Male", position: "Top", species: "Human", resource: "Mana", range: "Melee", region: "Shadow Isles", year: 2011 },
    { id: "Yuumi", name: "Yuumi", gender: "Female", position: "Support", species: "Cat", resource: "Mana", range: "Ranged", region: "Bandle City", year: 2019 },
    { id: "Zac", name: "Zac", gender: "Male", position: "Jungle", species: "Golem", resource: "Health", range: "Melee", region: "Zaun", year: 2013 },
    { id: "Zed", name: "Zed", gender: "Male", position: "Mid", species: "Human", resource: "Energy", range: "Melee", region: "Ionia", year: 2012 },
    { id: "Zeri", name: "Zeri", gender: "Female", position: "Bottom", species: "Human", resource: "Mana", range: "Ranged", region: "Zaun", year: 2022 },
    { id: "Ziggs", name: "Ziggs", gender: "Male", position: "Mid, Bottom", species: "Yordle", resource: "Mana", range: "Ranged", region: "Zaun", year: 2012 },
    { id: "Zilean", name: "Zilean", gender: "Male", position: "Support, Mid", species: "Human", resource: "Mana", range: "Ranged", region: "Icathia", year: 2009 },
    { id: "Zoe", name: "Zoe", gender: "Female", position: "Mid", species: "Aspect", resource: "Mana", range: "Ranged", region: "Targon", year: 2017 },
    { id: "Zyra", name: "Zyra", gender: "Female", position: "Support, Mid", species: "Spirit", resource: "Mana", range: "Ranged", region: "Ixtal", year: 2012 }
];

let targetChampion;
let latestVersion = "14.2.1";
let guessedChampions = [];

// Ορισμός του ήχου νίκης (μπορείς να αλλάξεις το URL με οποιοδήποτε .mp3 θέλεις)
// Αντικατάστησε την παλιά γραμμή με αυτήν
const victorySound = new Audio('sounds/win_sound.mp3');
victorySound.preload = 'auto'; // Το φορτώνει από πριν για να μην κολλάει

const input = document.getElementById('champion-input');
const list = document.getElementById('autocomplete-list');
const guessesBox = document.getElementById('guesses-box');
const newGameBtn = document.getElementById('new-game-btn');

async function initGame() {
    try {
        const vResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await vResponse.json();
        latestVersion = versions[0];
        startNewGame();
    } catch (e) {
        startNewGame();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startNewGame() {
    const randomIndex = getRandomInt(champions.length);
    targetChampion = champions[randomIndex];

    guessesBox.innerHTML = '';

    input.value = '';
    list.innerHTML = '';
    guessedChampions = []; //reset guessed
    console.log("Cheat code: "+targetChampion.name);
}

newGameBtn.addEventListener('click', () => {
    startNewGame();
});

input.addEventListener('input', () => {
    //input
    const val = input.value.toLowerCase();
    list.innerHTML = '';
    if (!val) return;

    champions.forEach(champ => {
        const isMatch = champ.name.toLowerCase().startsWith(val);
        const isAlreadyGuessed = guessedChampions.includes(champ.name);

        if (isMatch && !isAlreadyGuessed) {
            const item = document.createElement('div');
            item.classList.add('autocomplete-item');
            item.innerText = champ.name;
            item.onclick = () => {
                makeGuess(champ);
                input.value = '';
                list.innerHTML = '';
            };
            list.appendChild(item);
        }
    });
});

function makeGuess(guess) {
    guessedChampions.push(guess.name);

    const row = document.createElement('div');
    row.classList.add('guess-row');
    const attributes = ['name', 'gender', 'position', 'species', 'resource', 'range', 'region', 'year'];

    attributes.forEach((attr, i) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.setProperty('--i', i);

        if (attr === 'name') {
            const img = document.createElement('img');
            img.src = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${guess.id}.png`;
            img.classList.add('champ-icon');
            img.onerror = () => { img.src = "https://via.placeholder.com/50"; };
            cell.appendChild(img);

            const nameTxt = document.createElement('span');
            nameTxt.innerText = guess.name;
            cell.appendChild(nameTxt);
            cell.style.setProperty('background-color', '#3a3a3c', 'important');
        } else {
            cell.innerText = guess[attr];
        }

        //year logic
        if (attr === 'year') {
            if (guess.year === targetChampion.year) {
                cell.classList.add('correct');
            } else {
                cell.classList.add('wrong');
                cell.innerText += (guess.year < targetChampion.year) ? " ⬆️" : " ⬇️";
            }
        }

        //partial
        //convert se listes "Mid, Jungle" -> ["Mid", "Jungle"])
        const targetValues = targetChampion[attr].toString().split(', ').sort();
        const guessValues = guess[attr].toString().split(', ').sort();

        const targetStr = targetValues.join(', ');
        const guessStr = guessValues.join(', ');

        if (targetStr === guessStr) {
            // 1. ΑΠΟΛΥΤΑ ΙΔΙΑ (π.χ. Mid, Jungle == Jungle, Mid)
            cell.classList.add('correct');
        } else if (guessValues.some(val => targetValues.includes(val))) {
            // 2. ΜΕΡΙΚΩΣ ΙΔΙΑ (π.χ. αν το ένα έχει Mid και το άλλο Mid, Top)
            cell.classList.add('partial');
        } else {
            // 3. ΕΝΤΕΛΩΣ ΛΑΘΟΣ
            cell.classList.add('wrong');
        }

        row.appendChild(cell);
    });

    guessesBox.prepend(row);

    //win sound and alert
    if (guess.name === targetChampion.name) {
        setTimeout(() => {
            victorySound.pause();
            victorySound.currentTime = 0;

            victorySound.play().then(() => {
                if (confirm("PLAYER WINS! The champion was " + targetChampion.name + ". Start a new game ?") == true) {
                    startNewGame();
                }
            }).catch(error => {
                console.err("Browser blocked the sound", error);
            });


        }, 4000);
    }
}

initGame();