"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_admin_dto_1 = require("./create-admin.dto");
class UpdateAdminDto extends (0, mapped_types_1.PartialType)(create_admin_dto_1.CreateAdminDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAdminDto = UpdateAdminDto;
//# sourceMappingURL=update-admin.dto.js.map