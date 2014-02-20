from django.conf.urls import patterns, include, url
import tripleaxis.views
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'nistproejct2.views.home', name='home'),
    # url(r'^nistproejct2/', include('nistproejct2.foo.urls')),
    url(r'^home', tripleaxis.views.home, name='home'),
    url(r'^contact', tripleaxis.views.contact, name='contact'),
    url(r'^rescal', tripleaxis.views.rescal, name='rescal'),
    url(r'^res_calculator', tripleaxis.views.res_calculator, name='res_calculator'),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
