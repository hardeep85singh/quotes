package org.example.quotesRestAPI.rest;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

public class QuoteRestServices {

    private Map<String, String> quotes = new HashMap<>();

//    @GET
//    @Path("/quote")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public String getQuote(@QueryParam("quote") String quote){
//        String keyValue = Integer.toString(quote.hashCode());
//        quotes.put(keyValue, quote);
//        return quote;
//    }


    @POST
    @Path("/quote")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void quote(String quote){
        String keyValue = Integer.toString(quote.hashCode());
        quotes.put(keyValue, quote);
//        return quote;
    }

    @GET
    @Path("/quote")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, String> quoteList(){
        return quotes;
    }
}
