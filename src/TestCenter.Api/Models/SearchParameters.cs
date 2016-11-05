using System.Collections.Generic;

public class SearchParameters
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public List<string> Keywords { get; set; }
    public List<Sort> Sort { get; set; }
}

public class Sort
{
    public string Order { get; set; }
    public string Property { get; set; }
}