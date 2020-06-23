const CountryQuery = `
query {
 countries {
     country
     countryInfo {
         _id
         lat
         long
         flag
         iso3
         iso2
     }
     continent
     result {
         tests
         cases
         todayCases
         deaths
         todayDeaths
         recovered
         active
         critical
         casesPerOneMillion
         deathsPerOneMillion
         testsPerOneMillion
         updated
     }
 }
}


`;

const getCountry = `
query {
    countries {
        country
        countryInfo {
            _id
            lat
            long
            flag
            iso3
            iso2
        }
        
    }
  }
`

const GlobalStats = `
query{
    globalTotal {
        affectedCountries
        tests
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        testsPerOneMillion
        updated
    }
  }
  
`
const GhanaStats = `
    query {
        country(name:"Ghana"){
            country
            result{
                cases
                recovered
                deaths
                updated
                active
                critical
                tests
                updated
            }
        }
        
    }
`

const CountryStats = `
    query {
        country(name: "KEY"){
            country
            result{
                cases
                recovered
                deaths
                updated
                active
                critical
                tests
                updated
            }
        }
        
    }
`

export {getCountry, GlobalStats, GhanaStats, CountryQuery, CountryStats}