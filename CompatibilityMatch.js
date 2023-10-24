function GetBasePoint(magic_word)
{
    let base_point = 0;

    for (let i = 0; i < magic_word.length; i++)
    {
        base_point += parseInt(magic_word.charCodeAt(i));
    }

    return base_point;
}

function CalculateCompatibility(name1, name2, base_point)
{
    let name1_point = 0;
    let name2_point = 0;

    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    for (let i = 0; i < name1.length; i++)
    {
        name1_point += parseInt(name1.charCodeAt(i));
    }

    for (let i = 0; i < name2.length; i++)
    {
        name2_point += parseInt(name2.charCodeAt(i));
    }

    let point_sum = name1_point + name2_point;

    let higher = Math.max(point_sum, base_point);
    let lower = Math.min(point_sum, base_point);

    if (higher % lower)
    {
        return 1.0
    }

    return parseFloat(point_sum % base_point) / parseFloat(base_point)
}

