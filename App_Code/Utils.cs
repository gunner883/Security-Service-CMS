using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using umbraco.MacroEngines;

/// <summary>
/// Summary description for Utils
/// </summary>
public static class Utils
{
    public static bool IsNumeric(object Expression)
    {
        bool isNum;
        double retNum;
        isNum = Double.TryParse(Convert.ToString(Expression), System.Globalization.NumberStyles.Any, System.Globalization.NumberFormatInfo.InvariantInfo, out retNum);
        return isNum;
    }

    public static string RenderContentFolder(DynamicNode node)
    {
        string retval = "";

        foreach (var child in node.Children)
        {
            string alias = child.NodeTypeAlias;
            switch (alias)
            {
                case "contentFolder":
                    retval = "<h2>" + child.Name + "</h2>";
                    return RenderContentFolder(child);
                    break;
                case "feature":
                    retval = "<p>feature:" + child.Name + "</p>";
                    break;
                case "article":
                    retval = "<p>article:" + child.Name + "</p>";
                    break;
            }

        }
        
        return retval;
    }

}