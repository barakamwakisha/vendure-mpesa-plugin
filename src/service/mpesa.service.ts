import { Inject, Injectable } from "@nestjs/common";
import { PLUGIN_INIT_OPTIONS } from "@vendure/core";
import { MpesaPluginOptions } from "../mpesa.plugin";

@Injectable()
export class MpesaService {
    constructor(
        @Inject(PLUGIN_INIT_OPTIONS) private pluginOptions: MpesaPluginOptions
    ) { }
}