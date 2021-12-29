package io.jmix.frontdemo.security;

import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.security.role.annotation.SpecificPolicy;
import io.jmix.usermgmt.role.annotation.FrontendMenuPolicy;
import io.jmix.usermgmt.role.annotation.FrontendScreenPolicy;

@ResourceRole(name = "GraphQLRestrictedRole", code = "graphql-restricted-role")
public interface GraphQLRestrictedRole {
    @SpecificPolicy(resources = "graphql.enabled")
    @FrontendMenuPolicy(menuIds = "*")
    @FrontendScreenPolicy(screenIds = "*")
    void specify();
}
