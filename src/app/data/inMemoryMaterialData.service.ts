import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMaterialDataService implements InMemoryDbService {

    createDb() {
        let mails = [
            {
                "id": 201,
                "from": "yourtaxrefund@InternalRevenueService.com",
                "to": "me@example.com ",
                "subject": "Get your tax refund now!",
                "date": "2016-01-10T15:21:34.000Z",
                "text":"Dear Recipient,\n\nAfter the last annual calculations of your account activity we have determined that you are eligible to receive a tax refund of $479.30.\n\n Please submit the tax refund request and allow us 2-6 days in order to process it.\n\n A refund can be delayed for a variety of reasons. For example submitting invalid records or applying after the deadline.\n\n To access the form for your tax refund, please click here.\n\n Note: Deliberate wrong inputs will be prosecuted by law.\n\n Regards,\n Internal Revenue Service"
            },
            {
                "id": 202,
                "from": "productupdate@newrelic.com",
                "to": "me@example.com ",
                "subject": "Unleash the Power of Analytics",
                "date": "2017-01-10T15:21:34.000Z",
                "text":"Analyze your software performance like never before. New Relic Insights is now included with New Relic Free Trials. This means you can get:\n\n  Days and days of unaggregated data.\nGo back for 8 full days and review all your uncompressed, unaggregated event data. Examine week-over-week performance and drill into all the vital details.\n\nDimensional analysis.\nAsk questions about your software, like what happened in specific places, times, or devices—or any combination of these dimensions (and more). Simply put, you can slice and dice your software data in any number of new ways.\n\nThere’s no on-premise software or hardware for you to build or manage. Our super-powered supercluster is designed to do it all for you.\n\nJoin our upcoming webinar with Patrick Lightbody, VP of Product Management to discover how New Relic Software Analytics can help."
            },
            {
                "id": 203,
                "from": "noreply@moqups.com",
                "to": "me@example.com ",
                "subject": "Moqups 2 is here! Zoom, Rotation, Web fonts, Group editing and much more",
                "date": "2016-02-10T15:21:34.000Z",
                "text":"Version 2 is here\n\nWork smarter and be more productive with this amazing new release. Rewritten and redesigned from scratch.\n\nZoom ★ Rotation ★ Image crop ★ Web fonts ★ Editable groups ★ Multiple resize ★ Custom guides ★ Rulers ★ In-place comments\n\nCheck it out!"
            },
            {
                "id": 204,
                "from": "yourtaxrefund@InternalRevenueService.com",
                "to": "me@example.com ",
                "subject": "Get your tax refund now!",
                "date": "2016-05-10T15:22:34.000Z",
                "text":"Dear Recipient,\n\nAfter the last annual calculations of your account activity we have determined that you are eligible to receive a tax refund of $479.30.\n\n Please submit the tax refund request and allow us 2-6 days in order to process it.\n\n A refund can be delayed for a variety of reasons. For example submitting invalid records or applying after the deadline.\n\n To access the form for your tax refund, please click here.\n\n Note: Deliberate wrong inputs will be prosecuted by law.\n\n Regards,\n Internal Revenue Service"
            },
            {
                "id": 205,
                "from": "productupdate@newrelic.com",
                "to": "me@example.com ",
                "subject": "Unleash the Power of Analytics",
                "date": "2017-01-10T15:23:34.000Z",
                "text":"Analyze your software performance like never before. New Relic Insights is now included with New Relic Free Trials. This means you can get:\n\n  Days and days of unaggregated data.\nGo back for 8 full days and review all your uncompressed, unaggregated event data. Examine week-over-week performance and drill into all the vital details.\n\nDimensional analysis.\nAsk questions about your software, like what happened in specific places, times, or devices—or any combination of these dimensions (and more). Simply put, you can slice and dice your software data in any number of new ways.\n\nThere’s no on-premise software or hardware for you to build or manage. Our super-powered supercluster is designed to do it all for you.\n\nJoin our upcoming webinar with Patrick Lightbody, VP of Product Management to discover how New Relic Software Analytics can help."
            },
            {
                "id": 206,
                "from": "noreply@moqups.com",
                "to": "me@example.com ",
                "subject": "Moqups 2 is here! Zoom, Rotation, Web fonts, Group editing and much more",
                "date": "2016-02-10T15:19:34.000Z",
                "text":"Version 2 is here\n\nWork smarter and be more productive with this amazing new release. Rewritten and redesigned from scratch.\n\nZoom ★ Rotation ★ Image crop ★ Web fonts ★ Editable groups ★ Multiple resize ★ Custom guides ★ Rulers ★ In-place comments\n\nCheck it out!"
            },
            {
                "id": 207,
                "from": "yourtaxrefund@InternalRevenueService.com",
                "to": "me@example.com ",
                "subject": "Get your tax refund now!",
                "date": "2016-05-10T15:22:34.000Z",
                "text":"Dear Recipient,\n\nAfter the last annual calculations of your account activity we have determined that you are eligible to receive a tax refund of $479.30.\n\n Please submit the tax refund request and allow us 2-6 days in order to process it.\n\n A refund can be delayed for a variety of reasons. For example submitting invalid records or applying after the deadline.\n\n To access the form for your tax refund, please click here.\n\n Note: Deliberate wrong inputs will be prosecuted by law.\n\n Regards,\n Internal Revenue Service"
            },
            {
                "id": 208,
                "from": "productupdate@newrelic.com",
                "to": "me@example.com ",
                "subject": "Unleash the Power of Analytics",
                "date": "2017-01-10T15:23:34.000Z",
                "text":"Analyze your software performance like never before. New Relic Insights is now included with New Relic Free Trials. This means you can get:\n\n  Days and days of unaggregated data.\nGo back for 8 full days and review all your uncompressed, unaggregated event data. Examine week-over-week performance and drill into all the vital details.\n\nDimensional analysis.\nAsk questions about your software, like what happened in specific places, times, or devices—or any combination of these dimensions (and more). Simply put, you can slice and dice your software data in any number of new ways.\n\nThere’s no on-premise software or hardware for you to build or manage. Our super-powered supercluster is designed to do it all for you.\n\nJoin our upcoming webinar with Patrick Lightbody, VP of Product Management to discover how New Relic Software Analytics can help."
            },
            {
                "id": 209,
                "from": "noreply@moqups.com",
                "to": "me@example.com ",
                "subject": "Moqups 2 is here! Zoom, Rotation, Web fonts, Group editing and much more",
                "date": "2017-02-10T15:19:34.000Z",
                "text":"Version 2 is here\n\nWork smarter and be more productive with this amazing new release. Rewritten and redesigned from scratch.\n\nZoom ★ Rotation ★ Image crop ★ Web fonts ★ Editable groups ★ Multiple resize ★ Custom guides ★ Rulers ★ In-place comments\n\nCheck it out!"
            },
            {
                "id": 210,
                "from": "yourtaxrefund@InternalRevenueService.com",
                "to": "me@example.com ",
                "subject": "Get your tax refund now!",
                "date": "2016-09-10T15:22:34.000Z",
                "text":"Dear Recipient,\n\nAfter the last annual calculations of your account activity we have determined that you are eligible to receive a tax refund of $479.30.\n\n Please submit the tax refund request and allow us 2-6 days in order to process it.\n\n A refund can be delayed for a variety of reasons. For example submitting invalid records or applying after the deadline.\n\n To access the form for your tax refund, please click here.\n\n Note: Deliberate wrong inputs will be prosecuted by law.\n\n Regards,\n Internal Revenue Service"
            },
            {
                "id": 211,
                "from": "productupdate@newrelic.com",
                "to": "me@example.com ",
                "subject": "Unleash the Power of Analytics",
                "date": "2017-01-10T15:23:33.000Z",
                "text":"Analyze your software performance like never before. New Relic Insights is now included with New Relic Free Trials. This means you can get:\n\n  Days and days of unaggregated data.\nGo back for 8 full days and review all your uncompressed, unaggregated event data. Examine week-over-week performance and drill into all the vital details.\n\nDimensional analysis.\nAsk questions about your software, like what happened in specific places, times, or devices—or any combination of these dimensions (and more). Simply put, you can slice and dice your software data in any number of new ways.\n\nThere’s no on-premise software or hardware for you to build or manage. Our super-powered supercluster is designed to do it all for you.\n\nJoin our upcoming webinar with Patrick Lightbody, VP of Product Management to discover how New Relic Software Analytics can help."
            },
            {
                "id": 212,
                "from": "noreply@moqups.com",
                "to": "me@example.com ",
                "subject": "Moqups 2 is here! Zoom, Rotation, Web fonts, Group editing and much more",
                "date": "2017-02-10T15:15:34.000Z",
                "text":"Version 2 is here\n\nWork smarter and be more productive with this amazing new release. Rewritten and redesigned from scratch.\n\nZoom ★ Rotation ★ Image crop ★ Web fonts ★ Editable groups ★ Multiple resize ★ Custom guides ★ Rulers ★ In-place comments\n\nCheck it out!"
            },
            {
                "id": 213,
                "from": "yourtaxrefund@InternalRevenueService.com",
                "to": "me@example.com ",
                "subject": "Get your tax refund now!",
                "date": "2016-09-10T15:22:34.000Z",
                "text":"Dear Recipient,\n\nAfter the last annual calculations of your account activity we have determined that you are eligible to receive a tax refund of $479.30.\n\n Please submit the tax refund request and allow us 2-6 days in order to process it.\n\n A refund can be delayed for a variety of reasons. For example submitting invalid records or applying after the deadline.\n\n To access the form for your tax refund, please click here.\n\n Note: Deliberate wrong inputs will be prosecuted by law.\n\n Regards,\n Internal Revenue Service"
            },
            {
                "id": 214,
                "from": "productupdate@newrelic.com",
                "to": "me@example.com ",
                "subject": "Unleash the Power of Analytics",
                "date": "2017-01-10T15:23:33.000Z",
                "text":"Analyze your software performance like never before. New Relic Insights is now included with New Relic Free Trials. This means you can get:\n\n  Days and days of unaggregated data.\nGo back for 8 full days and review all your uncompressed, unaggregated event data. Examine week-over-week performance and drill into all the vital details.\n\nDimensional analysis.\nAsk questions about your software, like what happened in specific places, times, or devices—or any combination of these dimensions (and more). Simply put, you can slice and dice your software data in any number of new ways.\n\nThere’s no on-premise software or hardware for you to build or manage. Our super-powered supercluster is designed to do it all for you.\n\nJoin our upcoming webinar with Patrick Lightbody, VP of Product Management to discover how New Relic Software Analytics can help."
            },
            {
                "id": 215,
                "from": "noreply@moqups.com",
                "to": "me@example.com ",
                "subject": "Moqups 2 is here! Zoom, Rotation, Web fonts, Group editing and much more",
                "date": "2017-02-10T15:15:34.000Z",
                "text":"Version 2 is here\n\nWork smarter and be more productive with this amazing new release. Rewritten and redesigned from scratch.\n\nZoom ★ Rotation ★ Image crop ★ Web fonts ★ Editable groups ★ Multiple resize ★ Custom guides ★ Rulers ★ In-place comments\n\nCheck it out!"
            },
            
        ];
        return { mails };
    }

}