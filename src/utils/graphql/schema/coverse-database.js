const schema = 	`
    
    directive @cacheControl(
      maxAge: Int
      scope: CacheControlScope
    ) on FIELD_DEFINITION | OBJECT | INTERFACE
    input addTestingSiteInput {
      name: String!
      address: String!
      placesName: String!
      location: LocationInput
    }
    
    type AgeGroup {
      from: Int
      to: Int
    }
    
    input ageGroupInput {
      from: Int
      to: Int
    }
    
    type BroadcastMessage {
      _id: ID
      title: String
      description: String
      targetGroup: BroadcastMessageTargetGroup
      createdAt: DateTime
      updatedAt: DateTime
    }
    
    input broadcastMessageFilter {
      title: String
      description: String
      region: [String]
      ageGroup: ageGroupInput
    }
    
    input broadcastMessageInput {
      title: String!
      description: String!
      region: [String]
      ageGroup: ageGroupInput
    }
    
    type BroadcastMessageTargetGroup {
      ageGroup: AgeGroup
      region: [String]
    }
    
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }
    
    type CaseReport {
      _id: ID
      user: User
      reporting: Reporting
      location: String
      nearestLandmark: String
      alternateContact: String
      description: String
      createdAt: DateTime
      updatedAt: DateTime
    }
    
    input caseReportFilter {
      user: ID
      reporting: Reporting
      location: String
      nearestLandmark: String
      alternateContact: String
      description: String
    }
    
    enum CaseStatus {
      dead
      recovering
      critical
    }
    
    type Contact {
      _id: ID
      bluetoothID: String
      createdAt: DateTime
      updatedAt: DateTime
    }
    
    scalar Date
    
    scalar DateTime
    
    input editUserProfileInput {
      lastName: String
      otherNames: String
      age: Int
      gender: Gender
      notificationToken: String
      nationalID: String
      lastCountriesVisited: [String]
      arrivalDate: Date
      phone: PhoneNumber
      bluetoothID: String
      platform: Platform
      caseName: String
      licenseNumber: String
    }
    
    scalar EmailAddress
    
    enum Gender {
      male
      female
    }
    
    enum InfectionStatus {
      untested
      negative
      positive
    }
    
    scalar JSONObject
    
    type Location {
      coordinates: [Float]
    }
    
    input LocationInput {
      longitude: Float!
      latitude: Float!
    }
    
    input loginUserInput {
      phone: String!
    }
    
    type LoginUserOutput {
      success: Boolean!
      message: String!
    }
    
    type Media {
      mediaURL: String
      mediaType: MediaType
      title: String
      description: String
    }
    
    enum MediaType {
      audio
      video
    }
    
    type MobileToken {
      user: User
      mobileToken: String!
      newUser: Boolean!
      createdAt: DateTime!
      updatedAt: DateTime!
    }
    
    type Mutation {
      root: String
      loginUser(input: loginUserInput): LoginUserOutput!
      validateLoginUser(input: validateLoginUserInput): MobileToken!
      setUserNotificationToken(
        input: setUserNotificationTokenInput
      ): SetUserNotificationTokenOutput!
      editUserProfile(input: editUserProfileInput!): User
      recordVitals(input: recordVitalsInput): Vitals
      reportCase(input: reportCaseInput): CaseReport
      sendBroadcastMessage(input: broadcastMessageInput): BroadcastMessage
      addTestingSite(input: addTestingSiteInput): TestingSite
      saveMedia(input: saveMediaInput): Media
    }
    
    scalar PhoneNumber
    
    enum Platform {
      ios
      android
      web
      ussd
    }
    
    type Query {
      root: String
      memberProfile: User!
      users: [User]
      reportedCases(filter: caseReportFilter): [CaseReport]
      userReportedCases(filter: caseReportFilter): [CaseReport]
      vitals(filter: vitalsFilter): [Vitals]
      userVitals(filter: vitalsFilter): [Vitals]
      broadcastMessages(filter: broadcastMessageFilter): [BroadcastMessage]
      testingSites(filter: testingSiteFilter): [TestingSite]
      contacts(user: ID): [Contact]
      resolveContact(contact: ID): Contact
      media: [Media]
    }
    
    input recordVitalsInput {
      vitals: VitalsInput
      location: LocationInput
    }
    
    input reportCaseInput {
      reporting: Reporting
      location: String
      nearestLandmark: String
      alternateContact: String
      description: String
    }
    
    enum Reporting {
      self
      individual
    }
    
    input saveMediaInput {
      mediaURL: String!
      mediaType: MediaType!
      title: String!
      description: String
    }
    
    input setUserNotificationTokenInput {
      notificationToken: String!
    }
    
    type SetUserNotificationTokenOutput {
      success: Boolean!
      user: User!
    }
    
    type TestingSite {
      _id: ID
      name: String
      address: String
      placesName: String
      location: Location
      createdAt: DateTime
      updatedAt: DateTime
    }
    
    input testingSiteFilter {
      name: String
      address: String
      placesName: String
      location: LocationInput
    }
    
    scalar Upload
    
    type User {
      _id: ID
      lastName: String
      otherNames: String
      gender: Gender
      age: Int
      notificationToken: String
      lastCountriesVisited: [String]
      arrivalDate: Date
      nationalID: String
      phone: PhoneNumber
      bluetoothID: String
      platform: Platform
      caseName: String
      region: String
      infectionStatus: InfectionStatus
      caseStatus: CaseStatus
      licenseNumber: String
    }
    
    input validateLoginUserInput {
      phone: String!
      otp: String!
    }
    
    type Vitals {
      _id: ID
      user: User
      vitals: VitalsDetails
      location: Location
      createdAt: DateTime
      updatedAt: DateTime
    }
    
    type VitalsDetails {
      dryCough: Int
      tiredness: Int
      soreThroat: Int
      fever: Int
      aches: Int
      shortnessOfBreath: Int
    }
    
    input vitalsFilter {
      user: ID
    }
    
    input VitalsInput {
      dryCough: Int
      tiredness: Int
      soreThroat: Int
      fever: Int
      aches: Int
      shortnessOfBreath: Int
    }
    
        
`