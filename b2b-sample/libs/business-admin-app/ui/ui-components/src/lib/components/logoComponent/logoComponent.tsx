/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { SharedLogoComponent } from "@b2bsample/shared/ui/ui-components";
import React from "react";
import config from "../../../../../../../../config.json";
import logoImage from "../../../../../ui-assets/src/lib/images/logo.png";
import { LogoComponentProps } from "../../models/logoComponent/logoComponent";

/**
 * 
 * @param prop - name (org name), imageSize `small` | `medium` | `large` | `x-large`, white
 *
 * @returns Business app logo image.
 */
export function LogoComponent(prop: LogoComponentProps) {

    const { name, imageSize, white } = prop;

    return (
        <SharedLogoComponent
            image={ logoImage }
            tagLine={ config.BusinessAdminAppConfig.ApplicationConfig.Branding.tag }
            name={ name }
            imageSize={ imageSize }
            white={ white }
        />
    );
}

export default LogoComponent;
