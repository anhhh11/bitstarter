"""
    convert raw list check item to formal one
"""
a = """h1
.navigation
.logo
.blank
.about
.heading
.subheading
.pitch
.video
.thermometer
.order
.social
.section1
.section2
.faq
.footer"""

print '['+ ','.join(map(lambda x: '"' + x + '"',a.split())) +']'