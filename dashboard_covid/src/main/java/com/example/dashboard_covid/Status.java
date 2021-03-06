package com.example.dashboard_covid;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Status {
    private @JsonProperty("country") String country;
    private @JsonProperty("last_update") String last_update;
    private @JsonProperty("cases") int cases;
    private @JsonProperty("deaths") int deaths;
    private @JsonProperty("recovered") int recovered;
}