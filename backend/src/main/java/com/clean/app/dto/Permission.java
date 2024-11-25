package com.clean.app.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Permission {
    private String id;
    private String parentId;
    private String name;
    private String label;
    private PermissionType type;
    private String route;
    private BasicStatus status;
    private Integer order;
    private String icon;
    private String component;
    private Boolean hide;
    private Boolean hideTab;
    private String frameSrc;
    private Boolean newFeature;
    private List<Permission> children;
}
