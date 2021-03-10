package org.example.quotesRestAPI.rest;
import org.example.quotesRestAPI.model.Quote;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;

@Path("/quote")
public class QuoteRestServices {

    private Map<String, String> quotes = new HashMap<>();

    @POST
    @Path("/randomQuote")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response quote(Quote quote){
        quote.setId(Integer.toString(quote.hashCode()));
        quotes.put(quote.getId(), quote.getQuote());
        return Response.status(Response.Status.OK)
                .entity(quote.getQuote()).build();
    }

    @GET
    @Path("/listQuote")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, String> quoteList(){
        return quotes;
    }
}
