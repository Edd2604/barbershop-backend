"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_client_dto_1 = require("./create-client.dto");
class UpdateClientDto extends (0, mapped_types_1.PartialType)(create_client_dto_1.CreateClientDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateClientDto = UpdateClientDto;
//# sourceMappingURL=update-client.dto.js.map