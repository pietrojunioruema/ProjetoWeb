package com.example.dashboard_covid;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class Controlador {
  Status[] arraystatus;

  @GetMapping("/")
  public Status[] consumindostatus() {
    final ObjectMapper objectMapper = new ObjectMapper();
    try {
      arraystatus = objectMapper.readValue((new URL("https://covid19-api.org/api/status")), Status[].class);
    } catch (final JsonParseException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (final JsonMappingException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (final MalformedURLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (final IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    return arraystatus;
  }
}
