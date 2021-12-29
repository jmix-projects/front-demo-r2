package io.jmix.frontdemo.security;

import io.jmix.security.role.annotation.GraphQLPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.usermgmt.role.annotation.FrontendMenuPolicy;
import io.jmix.usermgmt.role.annotation.FrontendScreenPolicy;

@ResourceRole(name = "GraphQlRole", code = "graph-ql-restore-role")
public interface GraphQlRestoreRole {

    @GraphQLPolicy(operations = "*")
    @FrontendMenuPolicy(menuIds = "*")
    @FrontendScreenPolicy(screenIds = "*")
    void graphqlPolicy();

}