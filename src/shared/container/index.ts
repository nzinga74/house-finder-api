import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { ClientRepository } from "@modules/accounts/repositories/implementations/ClientRepository";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { IContractRepository } from "@modules/contracts/repositories/IContractRepository";
import { ContractRepository } from "@modules/contracts/repositories/implementations/ContractRepository";
import { IEmployeeRepository } from "@modules/maintenance/repositories/IEmployeeRepository";
import { IMaintenanceRepository } from "@modules/maintenance/repositories/IMaintenance";
import { EmployeeRepository } from "@modules/maintenance/repositories/implementations/EmployeeRepository";
import { MaintenanceRepository } from "@modules/maintenance/repositories/implementations/MaintenanceRepository";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";
import { IPropertyTypeRepository } from "@modules/property/repositories/IPropertyTypeRepository";
import { PropertyRepository } from "@modules/property/repositories/implementations/PropertyRepository";
import { PropertyTypeRepository } from "@modules/property/repositories/implementations/PropertyTypeRepository";
import { IReserveRepository } from "@modules/reserves/repositories/IReserveRepository";
import { ReserveRepository } from "@modules/reserves/repositories/implementations/ReserveRepository";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { BcryptHash } from "@shared/providers/HashProvider/implementations/BcryptHash";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { JsonWebToken } from "@shared/providers/TokenProvider/implementations/JsonWebToken";
import { container } from "tsyringe";

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", BcryptHash);
container.registerSingleton<ITokenProvider>("TokenProvider", JsonWebToken);
container.registerSingleton<IPropertyTypeRepository>(
  "PropertyTypeRepository",
  PropertyTypeRepository
);
container.registerSingleton<IPropertyRepository>(
  "PropertyRepository",
  PropertyRepository
);
container.registerSingleton<IEmployeeRepository>(
  "EmployeeRepository",
  EmployeeRepository
);

container.registerSingleton<IMaintenanceRepository>(
  "MaintenanceRepository",
  MaintenanceRepository
);

container.registerSingleton<IReserveRepository>(
  "ReserveRepository",
  ReserveRepository
);

container.registerSingleton<IContractRepository>(
  "ContractRepository",
  ContractRepository
);
