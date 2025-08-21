"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class updateUserDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_user_dto_1.CreateUserDto, ['password'])) {
}
exports.updateUserDto = updateUserDto;
//# sourceMappingURL=update-user.dto.js.map