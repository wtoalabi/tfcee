<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{$title}} | {{ config('app.name', 'FCEE') }}</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/student/landing.css') }}" rel="stylesheet">
</head>
<body>
        @yield('content')
</body>
</html>
@include('partials.shared_scripts')
