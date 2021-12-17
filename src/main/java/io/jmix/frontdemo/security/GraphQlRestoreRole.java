package io.jmix.frontdemo.security;

import io.jmix.security.role.annotation.GraphQLPolicy;
import io.jmix.security.role.annotation.ResourceRole;

@ResourceRole(name = "GraphQlRole", code = "graph-ql-restore-role")
public interface GraphQlRestoreRole {

    @GraphQLPolicy(operations = "*")
    void graphqlPolicy();

}