package io.jmix.frontdemo.security;

import io.jmix.frontdemo.entity.User;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.security.role.annotation.SpecificPolicy;
import io.jmix.usermgmt.role.annotation.FrontendMenuPolicy;
import io.jmix.usermgmt.role.annotation.FrontendScreenPolicy;

import static io.jmix.security.model.EntityAttributePolicyAction.MODIFY;
import static io.jmix.security.model.EntityAttributePolicyAction.VIEW;
import static io.jmix.security.model.EntityPolicyAction.*;

@ResourceRole(name = "JmixTestRole", code = "jmix-test-role")
public interface JmixTestRole {

    @EntityPolicy(entityClass = User.class, actions = {CREATE, READ, UPDATE, DELETE})
    @EntityAttributePolicy(entityClass = User.class, attributes = {"email"}, action = VIEW)
    @EntityAttributePolicy(entityClass = User.class,
            attributes = {"username", "password",
                    "firstName", "lastName"},
            action = MODIFY)
    @FrontendMenuPolicy(menuIds = {"UserList", "ResourceRoleList", "7173e042-ffd6-41ea-88bb-c34d8a619524"})
    @FrontendScreenPolicy(screenIds = {"UserList", "ResourceRoleList"})
    @SpecificPolicy(resources = "graphql.enabled")
    void specify();
}
