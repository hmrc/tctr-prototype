$('input').bind('paste', function (e) {
    var $start = $(this);
    var source

    //check for access to clipboard from window or event
    if (window.clipboardData !== undefined) {
        source = window.clipboardData
    } else {
        source = e.originalEvent.clipboardData;
    }
    var data = source.getData("Text");
    if (data.length > 0) {
        if (data.indexOf("\t") > -1) {
            var columns = data.split("\n");
            $.each(columns, function () {
                var values = this.split("\t");
                $.each(values, function () {
                    $start.val(this);
                    if ($start.closest('span').next('span').find('input')[0] != undefined || $start.closest('span').next('span').find('span')[0] != undefined) {
                    $start = $start.closest('span').next('span').find('input');
                    }
                    else
                    {
                     return false;
                    }
                });
                $start = $start.closest('span').parent().next('div').children('span:first').find('input');
            });
            e.preventDefault();
        }
    }
});
