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

import PeoplesIcon from '@rsuite/icons/Peoples';
import React, { useCallback, useEffect, useState } from "react";
import { Container, useToaster } from "rsuite";
import decodeListAllRoles from '../../../../../util/apiDecode/settings/role/decodeListAllRoles';
import EmptySettings from "../../../../common/emptySettings";
import SettingsTitle from "../../../../common/settingsTitle";
import RolesList from './otherComponents/rolesList';

/**
 * 
 * @param prop - session
 * 
 * @returns The role management interface section.
 */
export default function RoleManagementSectionComponent(prop) {

    const { session } = prop;

    const toaster = useToaster();

    const [rolesList, setRolesList] = useState([]);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(undefined);

    useEffect(() => {
        fetchAllRoles();
    }, [fetchAllRoles]);

    const fetchAllRoles = useCallback(async () => {

        const res = await decodeListAllRoles(session);

        console.log(res);

        if (res) {
            setRolesList(res);
        } else {
            setRolesList([]);
        }

    }, [session]);

    const onAddIdentityProviderClick = () => {
        setOpenAddModal(true);
    };

    return (
        <Container>

            <SettingsTitle
                title="Role Management"
                subtitle="Manage organization roles here." />

            {
                rolesList
                    ? <RolesList rolesList={rolesList} />
                    : <EmptySettings
                        bodyString="There are no roles created for the organization."
                        buttonString="Create role"
                        icon={<PeoplesIcon style={{ opacity: .2 }} width="150px" height="150px" />}
                        onAddButtonClick={onAddIdentityProviderClick}
                    />
            }



        </Container>
    );

}
