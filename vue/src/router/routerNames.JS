const RouterNames = Object.freeze({
  main: "main",
  login: "login",

  // Сервис
  serviceUsers: "service-users",
  serviceStaff: "service-staff",
  serviceEquipment: "service-equipment",
  serviceActiveNotifications: "service-active-notifications",
  serviceFinishedNotifications: "service-finished-notifications",
  serviceUserDetail: "service-user-detail",
  serviceUserByReferral: "serviceUserByReferral",

  // Лаборатория
  labUsers: "lab-users",
  labStaff: "lab-staff",
  labUserDetail: "lab-user-detail",

  labEquipment: "lab-equipment",
  labContracts: "lab-contracts",
  labContractsDone: "lab-ContractsDone",

  // Интеграторы
  integratorActive: "integrator-active",
  integratorReview: "integrator-review",
  integratorRejected: "integrator-rejected",
  integratorActivedetails: "integrator-Active-details",

  // Требует внимания
  attention: "attention",
});

export default RouterNames;