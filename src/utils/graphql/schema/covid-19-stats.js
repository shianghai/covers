const schema = `
    
    type Country {
      country: String!
      countryInfo: CountryInfo!
      result: Result!
      continent: String!
    }
    
    type CountryInfo {
      _id: ID
      lat: Float!
      long: Float!
      flag: String!
      iso3: String
      iso2: String
    }
    
    scalar DateTime
    
    type Query {
      globalTotal: Result!
      country(name: String!): Country!
      countries(sortBy: ResultParametersSortInput): [Country!]!
      yesterday(sortBy: ResultParametersSortInput): [Country!]!
      state(name: String!): State!
      states: [State!]!
    }
    
    type Result {
      cases: Int!
      todayCases: Int!
      deaths: Int!
      todayDeaths: Int!
      recovered: Int
      active: Int!
      critical: Int
      tests: Int
      casesPerOneMillion: Float
      deathsPerOneMillion: Float
      testsPerOneMillion: Float
      updated: DateTime
      affectedCountries: Int
    }
    
    enum ResultParametersSortInput {
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      casesPerOneMillion
      deathsPerOneMillion
    }
    
    type State {
      state: String!
      result: Result!
    }


`