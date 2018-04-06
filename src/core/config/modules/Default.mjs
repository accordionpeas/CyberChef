/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2018
* @license Apache-2.0
*/
import FromBase32 from "../../operations/FromBase32";
import FromBase64 from "../../operations/FromBase64";
import FromHex from "../../operations/FromHex";
import ROT13 from "../../operations/ROT13";
import ROT47 from "../../operations/ROT47";
import RotateLeft from "../../operations/RotateLeft";
import RotateRight from "../../operations/RotateRight";
import ShowBase64Offsets from "../../operations/ShowBase64Offsets";
import ToBase32 from "../../operations/ToBase32";
import ToBase64 from "../../operations/ToBase64";
import ToHex from "../../operations/ToHex";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Default = {
    "From Base32": FromBase32,
    "From Base64": FromBase64,
    "From Hex": FromHex,
    "ROT13": ROT13,
    "ROT47": ROT47,
    "Rotate left": RotateLeft,
    "Rotate right": RotateRight,
    "Show Base64 offsets": ShowBase64Offsets,
    "To Base32": ToBase32,
    "To Base64": ToBase64,
    "To Hex": ToHex,
};

export default OpModules;
